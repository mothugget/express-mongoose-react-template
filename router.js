'use strict';
const router = require('express').Router();
const stuff = require('./controllers/stuffController');

router.get('/stuff', stuff.getStuff);
router.post('/stuff', stuff.postStuff);

module.exports = router;