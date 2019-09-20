var express = require('express');
var router = express.Router();
let ObjectId=require('mongodb').ObjectId;


let dbconfig=require('../dbconfig/db-config');

/* GET home page. */
router.get('/', function (req, res, next) {

    let id=req.body.id;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let gender = req.body.gender;
    let country = req.body.Select1;
    let username = req.body.username;
    let email = req.body.email;
    let mob = req.body.mobnum;
    let password = req.body.Password;

    dbconfig.get().collection('signUpForm').findOne({"_id":ObjectId(id),"firstname":firstname,"lastname":lastname},function (err,result) {
        if (err) {
            console.log('error' + err)
        } else {
            console.log('successfully showed')

            res.render('update')

        }
    })

});


router.post('/', function (req, res) {
    let firstname = req.body.firstname;

    let id=req.body.id;



    dbconfig.get().collection('signUpForm').update({"_id":ObjectId(id)},{$set:{firstname}},function (err,result) {
        if (err) {
            console.log('error' + err)
        }else {
            console.log('successfully updated')

            res.render('feedback')

        }
    })
})

module.exports = router;