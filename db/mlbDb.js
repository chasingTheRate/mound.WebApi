const MongoClient = require('mongodb').MongoClient;

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

function getBoxscoresByDate(date) {
  const collection = db.collection('Boxscores');
  return collection.findOne({'_id': date})
}

function getLeagueLeaders() {
  const collection = db.collection('LeagueLeaders');
  return collection.find({}).toArray()
}

module.exports = {
  connect,
  getBoxscoresByDate,
  getLeagueLeaders,
}