const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all items
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// POST create item
router.post('/', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
});

router.delete('/:id', async (req, res) => 
{
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
});

module.exports = router;