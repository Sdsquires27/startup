const {MongoClient} = require("mongodb");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection("user");
const userItems = db.collection("userItems");

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) 
{
  return userCollection.findOne({ email: email });
}

function getUserByToken(token)
{
    return userCollection.findOne({token: token});
}

async function updateUser(user)
{
    await userCollection.updateOne({email:user.email}, {$set:user});
}

async function updateUserRemoveAuth(user)
{
    await userCollection.updateOne({email: user.email}, {$unset: {token: 1}});
}

async function addRegistryItem(user, item)
{
    await userItems.updateOne(
        {user: user.email}, 
        {
            $push: {items: {id:crypto.randomUUID(), name:item, status:null}},
        }, 
        {upsert: true});
}

async function removeRegistryItem(user, id)
{
    await userItems.updateOne(
        {user:user.email}, 
        {
            $pull: {items: {id:id}}
        });
}

