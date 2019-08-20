var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

/* GET home page. */
router.post('/', function(req, res, next) {
    let username=req.body.username;
    let password=req.body.password;

    console.log(username)

    let url='mongodb://localhost:27017'
    mongoClient.connect(url,function (error,client) {
        if (error){
              console.log("database error"+error)
        }
        else {
           let myDB=client.db('mysample');
            myDB.collection('person').findOne({username:username,password:password},function (err,result) {
                if (err) {
                    console.log("error")
                } else {
                    if (result) {
                        console.log("login success")
                    } else {
                        console.log("login failed")
                    }
                }
            })
        }



    })
});

module.exports = router;