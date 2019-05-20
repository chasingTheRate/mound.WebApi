const router = require('express').Router();
const mlbService = require('../services/mlbService');

router.get('/leagueLeaders', mlbService.getLeagueLeaders);
router.get('/', mlbService.getBoxscoresByDate);

module.exports = router;