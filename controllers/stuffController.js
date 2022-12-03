'use strict';
const stuff = require('../models/stuffModel');

exports.getStuff = (req, res) => {
    try {
        const stf = stuff.getAll();
        res.status(200);
        res.send(stf);
    } catch (e) {
        console.log('error ', e); 
        res.sendStatus(500);
    }
};

exports.postStuff = (req, res) => {
    try {
        stuff.postOne(req.body);
        res.status(201);
        res.send();
    } catch (e) {
        console.log('error ', e); 
        res.sendStatus(500);
    }
};