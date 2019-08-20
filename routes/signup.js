var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('output');
});

router.post('/',function (req,res) {
    let myname=req.body.name;
    let username=req.body.username;
    let email=req.body.email;
    let mob=req.body.mob;
    let password=req.body.password;

    console.log(myname)

    let url='mongodb://localhost:27017'

    mongoClient.connect(url,function (err,client) {
        if (err){
            console.log('Database connection error'+err)

        } else {
            let myDB=client.db('mysample');

            if(myDB){
                console.log('connected');

                myDB.collection('person').insertOne({name:myname,username:username,email:email,mobile:mob,password:password},function (err,result) {
                    if (err) {
                        console.log('error' + err)
                    }else {
                        console.log('successfully inserted'+result)

                        res.redirect("/")

                    }

                })
            }
        }

    })
})

module.exports = router;