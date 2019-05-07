const mlbController = require('../controllers/mlbController');
const util = require('../util');

async function getBoxscoresByDate (req, res) {
  const date = req.query.date;

  if (date) {
    if (!util.isValidDate(date)) { return res.sendStatus(400) }
  }
  res.type('json');
  boxscore = await mlbController.getBoxscoreByDate(req.query.date);
  res.status(200).send(boxscore || {});
}

module.exports = {
  getBoxscoresByDate
}