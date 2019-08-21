var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('output');
});

router.post('/',function (req,res) {
    let firstname=req.body.firstname;
    let lastname=req.body.lastname;
    let Gender=req.body._gender;
    let country=req.body.Select1;
    let username=req.body.username;
    let email=req.body.email;
    let mob=req.body.mobnum;
    let password=req.body.Password;
    let conform_password=req.body.confirmpassword;

    console.log(firstname)

    let url='mongodb://localhost:27017'

    mongoClient.connect(url,function (err,client) {
        if (err){
            console.log('Database connection error'+err)

        } else {
            let myDB=client.db('sample');

            if(myDB){
                console.log('connected');

                myDB.collection('signup').insertOne({firstname:firstname,lastname:lastname,username:username,Gender:_gender,country:Select1,email:email,mob:mobnum,password:password,conform_password:confirmpassword},function (err,result) {
                    if (err) {
                        console.log('error' + err)
                    }else {
                        console.log('successfully inserted'+result)

                        res.redirect("/login")

                    }

                })
            }
        }

    })
})

module.exports = router;