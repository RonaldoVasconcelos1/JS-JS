const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ronaldo:12345@cluster0.dk4pr.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect( async err => {
  const collection = client.db("grades").collection("students");
  const consult =  await collection.find({ lastName:'Vasconcelos' }).toArray();

  console.log(consult);

  const databaseList = await client.db().admin().listDatabases();

    databaseList.databases.forEach((db) => {
        console.log(` - ${db.name}`);
    });

  client.close();
});
