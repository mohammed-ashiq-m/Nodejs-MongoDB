var express = require('express');
var router = express.Router();

let dbconfig=require('../dbconfig/db-config');

router.get('/', function (req, res, next) {
    console.log('hai hello')
    dbconfig.get().collection('signUpForm').find({Select1:"India"}).sort({firstname:1}).toArray(function (err, result) {
        if (err) throw err;
        res.render('feedback',{data:result})

    });
});




module.exports = router;
