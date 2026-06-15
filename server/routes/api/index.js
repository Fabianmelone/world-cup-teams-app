const router = require('express').Router();
const groupRoutes = require('./group-routes');
const teamRoutes = require('./team-routes');
const playerRoutes = require('./player-routes');

router.use('/groups', groupRoutes);
router.use('/teams', teamRoutes);
router.use('/players', playerRoutes);

module.exports = router;