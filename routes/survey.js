const express = require('express');
const router = express.Router();
const json = require('json')

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/surveyMonkey';



/* GET users listing. */
router.post('/', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) return process.exit(1)
        db.collection('MemberFb').insertOne(req.body);
        db.close();
    });

    res.send('Survey Submitted!!');
});


module.exports = router;