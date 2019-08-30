var express = require('express');
var router = express.Router();
let ObjectId=require('mongodb').ObjectId;


let dbconfig=require('../dbconfig/db-config');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('update');
    console.log('updationready')
});

router.post('/', function (req, res, next) {

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let gender = req.body.gender;
    let country = req.body.Select1;
    let username = req.body.username;
    let email = req.body.email;
    let mob = req.body.mobnum;
    let password = req.body.Password;

    let id=req.body.id;
    console.log('updatiprocess')
    dbconfig.get().collection('signUpForm').updateOne({"_id":ObjectId(id)},{$set:{firstname}},function (err,result) {
        if (err) {
            console.log('error' + err)
        }else {
            console.log('successfully updated'+result)

            res.render('feedback',result)

        }

    })
});

module.exports = router;