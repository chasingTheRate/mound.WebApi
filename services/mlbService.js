const mlbController = require('../controllers/mlbController');
const util = require('../util');

async function getBoxscoresByDate (req, res) {
  const date = req.query.date;

  if (date) {
    if (!util.isValidDate(date)) { return res.sendStatus(400) }
  }

  res.type('json');

  try {
    const boxscore = await mlbController.getBoxscoresByDate(req.query.date);
    res.status(200).send(boxscore || {});
  } catch (err) {
    res.sendStatus(500);
    console.log('Error - getBoxscoresByDate');
    console.err(err);
  }
}

module.exports = {
  getBoxscoresByDate
}