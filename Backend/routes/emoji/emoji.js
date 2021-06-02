const express = require('express');
const mongoose = require('mongoose');
const Emoji = require('./mongoose_schema/emoji');


const router = express.Router();


router.get('/', async (req, res, next) => {
    const emojis = await Emoji.find()
    res.status(200).send(emojis);
});

module.exports = router;