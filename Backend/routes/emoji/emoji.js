const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from pictures`);
});

module.exports = router;