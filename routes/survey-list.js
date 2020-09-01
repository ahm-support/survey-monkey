const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/surveyMonkey';
var str = "";

/* GET home page. */
router.get('/', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        var cursor = db.collection('MemberFb').find();
        //noinspection JSDeprecatedSymbols

        res.send("Let's see");
        db.close();
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;