
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'mlb';
 
var db;
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

const getBoxscoreByDate = (date) => {
  const collection = db.collection('Boxscores');
  return collection.findOne({'_id': date})
}

module.exports = {
  getBoxscoreByDate
}