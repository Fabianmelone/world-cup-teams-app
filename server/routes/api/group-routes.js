const router = require('express').Router();
const Group = require('../../models/Group');

router.get('/', async (req, res) => {
    try {
        const groups = await Group.find().populate('teams');
        res.json(groups);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const group = await Group.findById(req.params.id).populate('teams');

        if (!group) {
            return res.status(404).json({ message: 'No group found with this id'});
        }

        res.json(group);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newGroup = await Group.create(req.body);
        res.status(201).json(newGroup);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;