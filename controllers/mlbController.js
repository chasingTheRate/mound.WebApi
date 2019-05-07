const moment = require('moment');
const config = require('../config');
const mlbDb = require('../db/mlbDb');

mlbDb.connect(config.datebaseUrl, config.databaseName);

const getBoxscoreByDate = (date) => {
  if (!date) {
    date = moment().format('L');
  }
  return mlbDb.getBoxscoreByDate(date)
}

module.exports = {
  getBoxscoreByDate
}