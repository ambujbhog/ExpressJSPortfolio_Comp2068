// Index.js
// Made by Ambuj Bhog
// My Portfolio


'use strict';
var express = require('express');
var router = express.Router
var dbinfoModel = require('../models/dbinfo');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'HOME' });
});

// the only file that is not created in app.js
router.get('/insert', function (req, res) {
    res.render('insert');
});

router.post('/insert', function (req, res) {
    //Create a new article using the Articles Model Schema
    const dbinfo = new dbinfoModel({ name: req.body.name, description: req.body.description });
    //Insert article into DB
    dbinfo.save(function (err) {
        console.log('INSERTING');
        res.redirect('/');
    });
});

module.exports = router;
 