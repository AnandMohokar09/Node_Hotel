const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const Menu = new Menu(data);

        const response = await Menu.save();
        console.log('data saved')
        res.status(200).json(response);
    } catch (error) {
        console.log("error")
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/', async (req, res) => {
    try {
        const menu = await Menu.find();
        console.log('data fetched');
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        const menu = await Menu.find({taste: taste});

        res.json(menu);
    } catch (error) {
        console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;