var express = require('express');
var router = express.Router();
let ObjectId=require('mongodb').ObjectId;


let dbconfig=require('../dbconfig/db-config');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('update');

});

router.post('/', function (req, res) {
    let firstname = req.body.firstname;

    let id=req.body.id;



    dbconfig.get().collection('signUpForm').updateOne({"_id":ObjectId(id)},{$set:{firstname}},function (err,result) {
        if (err) {
            console.log('error' + err)
        }else {
            console.log('successfully updated')

            res.render('feedback')

        }

    })






})




module.exports = router;