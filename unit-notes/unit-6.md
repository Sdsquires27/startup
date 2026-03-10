# Data and Authentication Services
## March 5
### Deployment
It is critical to separate where you develop your application from where the production release of your application is made publicly available. Often times there are more environments than this, such as staging, internal testing, and external testing environments. If your company is seeking third party security certification, they will require that theseenvironments are strictly separated from one another. A developer will not have access to the production environment in order to prevent a developer from nefariously manipulating an entire company asset. Instead, automated integration processes, called continuous integration (CI) processes, checkout the appiclication code, lint (analyze) it, build it, test it, stage it, test it more, and, if it all checks out, deploy the application, notifying the different departments in the company of the release. For our work, we will use and manage both the development environment (the computer) as well as your production environment (AWS). However, you should never consider your production environment as a palce to develop or experiment with your application. You may shell into the production environment to configure your server or debug a production problem, but the deployment of your application should happen using an automated CI process. We use a simple console shell script. 
#### Automating your Deployment
The advantage of using an automated deployment process is that it is reproducible. It is hard to make an accidental mistake and it’s much easier to deploy your code. You can add something small, deploy it, and get feedback quickly. We use the deployment scripts used so far in this class, which are run through the command: 
```
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
```
-k provided a credential file, -h the doman name, and -s the name of the application you are deploying.
The first part of the script parses the command line parameters so that we can pass in the production environment’s security key, the hostname of your domain, and the name of the service you are deploying. 
while getopts k:h:s: flag
```
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"
```

Then, the script copies all of the applicable source files into a distribution directory in preparation for copying that directory to your production server.
```
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist
```
The target directory on your production environment is deleted so that the new one can replace it, done using ssh commands:
```
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH
```

The distribution directory is copied to the production environment using the secure copy program (scp).
```
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service
```
ssh is used again to execute some code to the production environment. This installs the node packages with npm install and restarts PM2 that runs the web application in the production environment.
```
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH
```
Finally, we clean up our development environment by deleting the distribution package.
```
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
```
This is way better than doing this by hand every time.
### Storage Services
Web applications commonly need to store files associated with the application or the users of the application, such as images, user uploads, documents, and movies. These can be stored using a database service, but usually that’s more than necessary. It can’t be stored on the server because:
- The server has limited space, which will cause the whole server to fail if used
- A server is temporary, and can be deleted at any time
- You will need backup copies of things
Instead, you want to use a storage service that is used to support production storage and delivery of files. Here are major cloud storage providers:

|Provider|Documentation|Free Tier|Free Storage Included|
|-------|---------|-----|-------|
|Amazon S3|Amazon S3 Documentation|Yes|5 GB for 12 months|
|Google Cloud Storage|Google Cloud Storage Documentation|Yes|5 GB|
|Microsoft Azure Storage|Azure Storage Documentation|Yes|5 GB for 12 months|
|IBM Cloud Object Storage|IBM Cloud Object Storage Documentation|Yes|Lite plan with 25 GB|
|MinIO|MinIO Documentation|No|N/A|
|OpenStack Swift|OpenStack Swift Documentation|No|N/A|

We will not be using any storage services for the simon project, but you can use S3 or a different storage system for your Startup application. An example of this is found in the lesson.
### Uploading Files
Web applications often need to upload one or more files from the frontend application running in the browser to the backend service, which can be done by using the HTML input of the type file on the frontend, and the Multer NPM package on the backend.
#### Frontend code
This registers even for when the selected file changes and only accepts files of certain types:
```html
<html lang="en">
  <body>
    <h1>Upload an image</h1>
    <input type="file" id="fileInput" name="file" accept=".png, .jpeg, .jpg" onchange="uploadFile(this)" />
    <div>
      <img style="padding: 2em 0" id="upload" />
    </div>
    <script defer src="https://raw.githubusercontent.com/webprogramming260/webprogramming/main/instruction/webServices/uploadingFiles/frontend.js"></script>
  </body>
</html>
```
The JavaScript handles the file and uses the filename to set the src attribute of the image element in the DOM:
```js
async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}
```
#### Backend code
In order to build storage, we will install multer. It handles reading the file from the HTTP request, enforcing the size limit of the upload, and storing the file in the public directory. It also handles requests for static files so that we can serve the frontend code, handles errors, generates a filename, provides access to the uploads using express.static middleware:
```js
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'public/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## March 10
### Data Services
Web applications need to store application and user data persistently, which can be many things but is usually a representation of complex, interrelated objects. This includes things like a user profile, organizational structure, gameplay information, usage history, billing information, peer relationship, library catalog, and so forth.
SQL data bases have historically served as the general purpose data service solution, but starting around 2010, specialty data services (called NoSQL because they do not use the paradigms popularized by SQL databases) began to take significant roles in applications from major companies. Each has different underlying data structures, strengths, and weaknesses. This does not mean that you have to just consider SQL and NoSQL, but rather choose what you think is best for your application. 

|Service|Specialty|
|-----|------|
|MySQL|Relational queries|
|Redis|Memory cached objects|
|ElasticSearch|Ranked free text|
|MongoDB|JSON objects|
|DynamoDB|Key value pairs|
|Neo4J|Graph based data|
|InfluxDB|Time series data|

#### MongoDB
We will use MongoDB. Mango increases developer productivity by using JSON objects as its core data model, which makes it easy to have an application taht uses JSOn from the top to the bottom fo the technology stack. It is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. For instance, consider this sample of a collection of houses that are for rent:
```json
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```
Mango, unlike other databases, has no strict scheme requirements. Each document follows a similar schema, but each document may have specialized fields which are present or common fields that are missing. The schema of a collection morphs organically as the data model of teh application evolves. To add a new field, you just insert the field into the document. If the firld is not there, the document doesn’t match the query criteria when the field is referenced. These are examples for queries in JavaScript:
```js
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

#### MongoDB Atlas
We will use the data service provided by MongoDB called Atlas. This is free. The main steps (with additional instruction found in a video featured) are:
1. Create your account
2. Create a database cluster
3. Create your root database user credentials. Remember these for later use.
4. Set network access to your database to be available from anywhere.
5. Copy the connection string and use the information in your code
6. Save the connection and credential information in your production and development environments as instructed above.
You can find the connection string to your Atlas cluster by pressing the connect button from your Database > DataServices view.
#### Keeping the keys out of your code
Do not put the credentials into your code and post it to a public GitHub repository. Instead, load your credentials when teh application executes through a JSON configuration file that contains the credentials which are dynamically loaded into the JavaScript to make the database connection. 
#### Using MongoDB in your application
The first step to using Mongo in your application is to install the mongodb package using NPM:
```powershell
mkdir testMongo && cd testMongo
npm init -y
npm install mongodb
```

Store your configuration information in the project:
1. Create a file named dbConfig.json (make sure that this is included in your .gitignore file)
2. Insert your Mongo DB credentials into the file in JSON format using the following examples:
```json
{
  "hostname": "cs260.abcdefg.mongodb.net",
  "userName": "myMongoUserName",
  "password": "toomanysecrets"
}
```
With that done, go ahead and create a file named database.js. In that file you import your database credentials and use the MongoClient object ot make a client connection to the database server. This requires a username, password, and the hostname of the database server. 
```js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('rental');
const collection = db.collection('house');

async function main() {
  try {
    // add all the following database code here
    
  } finally {
    client.close();
  }
}

main();
```
You don’t have to do anything special to insert a JavaScript object as a Mongo document--just call insertOne function on the collection and pass it the JavaScript object. When you insert a document, if the database or collection does not exist, Mongo will automatically create them for you.
```js
const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
const insertResult = await collection.insertOne(house);
```

To query for documents you use the find function on the collection object. This is asynchronous and so we use the await keyword.
```js
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

If you don’t supply parameters to find, it will return all documents in the collection. You can provide a query and options to the find function.
```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };
const options = {
  sort: { name: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

You can update any record by providing a query and the fields you want to update. The updateMany function will update everything that matches the query, and updateOne will only update the first matching document.
```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };
await collection.updateMany(query, { $set: { beds: 2 } });
```

In the same way that you updated documents you can also delete them, using deleteMany or deleteOne:
```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };
await collection.deleteMany(query);
```

Or
```js
const insertResult = await collection.insertOne(house);

const deleteQuery = { _id: insertResult.insertedId };
await collection.deleteOne(deleteQuery);
```

It is nice to know that your connection string is correct before you try to access data. Here is an example of testing the connection: 
```js
try {
  await db.command({ ping: 1 });
  console.log(`DB connected to ${config.hostname}`);
} catch (ex) {
  console.log(`Error with ${url} because ${ex.message}`);
  process.exit(1);
}
```

Here is a full test: 
```js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db('rental');
const collection = db.collection('house');

async function main() {
  try {
    // Test that you can connect to the database
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Connection failed to ${url} because ${ex.message}`);
    process.exit(1);
  }

  try {
    // Insert a document
    const house = {
      name: 'Beachfront views',
      summary: 'From your bedroom to the beach, no shoes required',
      property_type: 'Condo',
      beds: 1,
    };
    await collection.insertOne(house);

    // Query the documents
    const query = { property_type: 'Condo', beds: { $lt: 2 } };
    const options = {
      sort: { name: -1 },
      limit: 10,
    };
    const cursor = collection.find(query, options);
    const rentals = await cursor.toArray();
    rentals.forEach((i) => console.log(i));

    // Delete documents
    await collection.deleteMany(query);
  } catch (ex) {
    console.log(`Database (${url}) error: ${ex.message}`);
  } finally {
    await client.close();
  }
}

main();
```
Which should return this: 
```
DB connected to cs260.3452434.mongodb.net
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
```

