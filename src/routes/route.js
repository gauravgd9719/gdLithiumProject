const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/clickme', function (req, res) {
    res.send('this is calling from gaurav dhiman ')
});

router.get('/click', function (req, res) {
    res.send('hi buddy i am gd  ')
});


module.exports = router;