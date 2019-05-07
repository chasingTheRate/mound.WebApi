const router = require('express').Router();
const mlbRoutes = require('./mlbRoutes');

router.use('/mlb', mlbRoutes);

module.exports = router;
