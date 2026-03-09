const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const express = require('express');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());

// memory data structures
let users = [];
let userItems = {};
let claimStatuses = {};
const authCookieName = "token";


let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Static files
app.use(express.static('public'));

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Catch-all LAST
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// service endpoints
// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

//GetRegistry
apiRouter.get('/registry/:username', verifyAuth, async (req, res) => {
    const user = req.params.username;
    if (!userItems[user]) {
        res.send(null);
    } 
    else {
        res.send(userItems[user]);
    }
});

//GetClaimedStatuses
apiRouter.get('/registry/:username/claimStatus', verifyAuth, async (req, res) => {
    const user = req.params.username;
    if (!userItems[user]) {
        res.send(null);
    } 
    else {
        res.send(claimStatuses[user]);
    }
});


//AddItem
apiRouter.post('/registry/:itemName', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    const item = req.params.itemName;
    var items = JSON.parse(userItems[user.email] || '[]');
    var claimStatus = JSON.parse(claimStatuses[user.email] || '[]');

    if (!Array.isArray(items)) items = [];
    if (!Array.isArray(claimStatus)) claimStatus = [];

    items.push(item);
    claimStatus.push("null");
    userItems[user.email] = JSON.stringify(items);
    claimStatuses[user.email] = JSON.stringify(claimStatus);
    res.send(userItems[user.email]);
});

// DeleteItem
apiRouter.delete('/registry/:username/:itemId', verifyAuth, async (req, res) => {
    const user = req.params.username;
    const itemId = parseInt(req.params.itemId);

    var items = JSON.parse(userItems[user] || '[]');
    var claimStatus = JSON.parse(claimStatuses[user] || '[]');

    if (!Array.isArray(items)) items = [];
    if (!Array.isArray(claimStatus)) claimStatus = [];

    items.splice(itemId, 1);
    claimStatus.splice(itemId, 1);
    userItems[user] = JSON.stringify(items);
    claimStatuses[user] = JSON.stringify(claimStatus);
    res.send({ items: userItems[user], claimStatuses: claimStatuses[user] });
});

// ClaimItem
apiRouter.post('/registry/:username/:itemId/claim', verifyAuth, async (req, res) => {

    const user = req.params.username;
    const curUser = await findUser('token', req.cookies[authCookieName]);

    if (curUser.email === user) {
        res.status(403).send({ msg: 'You cannot claim your own items' });
        return;
    }

    const itemId = parseInt(req.params.itemId);
    var claimStatus = JSON.parse(claimStatuses[user] || '[]');
    claimStatus[itemId] = curUser.email;
    claimStatuses[user] = JSON.stringify(claimStatus);
    res.send(claimStatuses[user]);

});

// UnclaimItem
apiRouter.post('/registry/:username/:itemId/unclaim', verifyAuth, async (req, res) => {
    const user = req.params.username;
    const itemId = parseInt(req.params.itemId);
    var claimStatus = JSON.parse(claimStatuses[user] || '[]');
    claimStatus[itemId] = "null";
    claimStatuses[user] = JSON.stringify(claimStatus);

    res.send(claimStatuses[user]);
});

// Helper functions
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
  });
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});