const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
var db;

async function connect(dbUrl, dbName) {
  try {
    var client = await MongoClient.connect(dbUrl, { useNewUrlParser: true })
    db = client.db(dbName);
    console.log(`Connected to DB successfully!`);
  } catch (err) {
    console.log(`Error Connecting to MongoDB`);
    console.error(err);
  }
}

const getBoxscoreByDate = (date) => {
  const collection = db.collection('Boxscores');
  return collection.findOne({'_id': date})
}

module.exports = {
  connect,
  getBoxscoreByDate
}