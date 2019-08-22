
var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

router.post('/email',function (req,res) {

    let email=req.body.email;

    let url = 'mongodb://localhost:27017/signUpForm'


    mongoClient.connect(url, function (error, client) {
        if (error) {
            console.log("database error" + error)
        } else {
            let myDB = client.db('nodejs');
            myDB.collection('signUpForm').findOne({email:email}, function (err, user) {
                if (err) {
                    console.log("error")
                } else {
//console.log(user)
                    if (user) {
                        res.send(false); //this is not returning back to the statement that called the helper function
                    } else {
                        res.send(true); //this is not returning back to the statement that called the helper function
                    }
                }
            })
        }


    })


})

router.post('/mobilenumb',function (req,res) {

    let mobilenumb=req.body.mobnum;

    let url = 'mongodb://localhost:27017/signUpForm'


    mongoClient.connect(url, function (error, client) {
        if (error) {
            console.log("database error" + error)
        } else {
            let myDB = client.db('nodejs');
            myDB.collection('signUpForm').findOne({mobnum:mobilenumb}, function (err, user) {
                if (err) {
                    console.log("error")
                } else {
console.log(user)
                    if (user) {
                        res.send(false); //this is not returning back to the statement that called the helper function
                    } else {
                        res.send(true); //this is not returning back to the statement that called the helper function
                    }
                }
            })
        }


    })


})



module.exports = router;