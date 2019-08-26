var express = require('express');
var router = express.Router();

let dbconfig=require('../dbconfig/db-config');

        /* GET home page. */
        router.get('/', function (req, res, next) {
            res.render('output');
        });

        router.post('/', function (req, res) {
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let gender = req.body.gender;
            let country = req.body.Select1;
            let username = req.body.username;
            let email = req.body.email;
            let mob = req.body.mobnum;
            let password = req.body.Password;


            console.log(firstname)

            dbconfig.get().collection('signUpForm').insertOne({firstname:firstname,lastname:lastname,username:username,gender:gender,Select1:country,email:email,mobnum:mob,password:password},function (err,result) {
                if (err) {
                    console.log('error' + err)
                }else {
                    console.log('successfully inserted'+result)

                    res.render('login')

                }

            })






            })

module.exports = router;