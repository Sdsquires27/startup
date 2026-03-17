const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const DB = require('./database.js');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());

// memory data structures
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
      await DB.updateUser(user);
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
    await DB.updateUserRemoveAuth(user);
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
    res.send(await DB.getItems(user));
});

//GetClaimedStatuses
apiRouter.get('/registry/:username/claimStatus', verifyAuth, async (req, res) => {
    const user = req.params.username;
    res.send(await DB.getItems(user).map(item=>item.status));
});


//AddItem
apiRouter.post('/registry/:itemName', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    const item = req.params.itemName;
    res.send(await DB.addRegistryItem(user, item));
});

// DeleteItem
apiRouter.delete('/registry/:username/:itemId', verifyAuth, async (req, res) => {
    const user = req.params.username;
    const itemId = req.params.itemId;
    res.send(await DB.removeRegistryItem(user, itemId));
});

// ClaimItem
apiRouter.post('/registry/:username/:itemId/claim', verifyAuth, async (req, res) => {

    const user = req.params.username;
    const curUser = await findUser('token', req.cookies[authCookieName]);

    if (curUser.email === user) {
        res.status(403).send({ msg: 'You cannot claim your own items' });
        return;
    }

    const itemId = req.params.itemId;
    res.send(await DB.claimItem(user, itemId, curUser.email));

});

// UnclaimItem
apiRouter.post('/registry/:username/:itemId/unclaim', verifyAuth, async (req, res) => {
    const user = req.params.username;
    const itemId = req.params.itemId;
    res.send(await DB.unclaimItem(user, itemId));
});

// Helper functions
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value)
{
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
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