// projects.js
// Made by Ambuj Bhog
// My Portfolio


'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('projects', { projectsPage: 'Projects Page!' });
});

module.exports = router;
