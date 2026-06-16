const router = require('express').Router();
const Player = require('../../models/Player');

router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const player = await Player.findOne({slug: req.params.slug});

        if (!player) {
            return res.status(404).json({ message: 'No player found with this slug'});
        }

        res.json(player);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newPlayer = await Player.create(req.body);
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;