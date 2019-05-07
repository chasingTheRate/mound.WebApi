const moment = require('moment');
const config = require('../config');
const mlbDb = require('../db/mlbDb');

mlbDb.connect(config.datebaseUrl, config.databaseName);

const getBoxscoresByDate = (date) => {
  if (!date) {
    date = moment().format('L');
  }
  return mlbDb.getBoxscoresByDate(date)
}

module.exports = {
  getBoxscoresByDate
}