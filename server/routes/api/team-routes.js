const router = require('express').Router();
const Team = require('../../models/Team');

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find().populate('players');
        res.json(teams);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('players');

        if (!team) {
            return res.status(404).json({ message: 'No team found with this id'});
        }

        res.json(team);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;