const moment = require('moment');
const mlbDb = require('../db/mlbDb');

const getBoxscoreByDate = (date) => {
  if (!date) {
    date = moment().format('L');
  }
  return mlbDb.getBoxscoreByDate(date);
}

module.exports = {
  getBoxscoreByDate
}