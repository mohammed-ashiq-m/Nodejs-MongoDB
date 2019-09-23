var express = require('express');
var router = express.Router();
let ObjectId=require('mongodb').ObjectId;


let dbconfig=require('../dbconfig/db-config');

/* GET home page. */
router.get('/', function (req, res, next) {

    console.log('body======>>>>>>>>>>>>>>>>', req.query)
    let id = req.query.id;

    console.log('id======>>>>>>>>>>>>>>>>', id)
    dbconfig.get().collection('signUpForm').findOne({_id:ObjectId(id)},function (err, result) {
      console.log("result:-",result)
        if (err) {
            console.log('error' + err)
        } else {
            console.log('successfully showed')


            let gen;

            if(result.gender==='Male'){
                gen=true;
            }
            else{
                gen=false;
            }

            let pubg;
            let cfs;
            let ff;
            console.log(result.games);
            if(result.games==='Pubg'){
                pubg=true;
            }
            else if(result.games==='Call Of Duty'){
                cfs=true;
            }
            else if(result.games==='Free Fire'){
                ff=true;
            }
            res.render('update',{data:result,gen:gen,pubg:pubg,cfs:cfs,ff:ff})

        }
    })
});

router.post('/updateForm', function (req, res) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let gender = req.body.gender;
    let country = req.body.Select1;
    let username = req.body.username;
    let game=req.body.games;


    let password = req.body.Password;

    let id=req.body.id;

console.log("=================>ID",id);


    dbconfig.get().collection('signUpForm').updateOne({"_id":ObjectId(id)},{$set:{firstname:firstname,lastname:lastname,username:username,gender:gender,Select1:country,password:password,games:game}},function (err,result) {
        if (err) {
            console.log('error' + err)
        }else {
            console.log('successfully updated',result)

            res.render('feedback')

        }
    })
})

router.post('/delete', function(req, res, next) {

    let id=req.body.id;

    console.log(id);


    dbconfig.get().collection('signUpForm').deleteOne({_id:ObjectId(id)}, function (err,docs) {
                    if (err) {
                        console.log('error' + err)
                    } else {
                        // console.log('displayed' + docs);

                        res.send(true);

                    }
    })
})

module.exports = router;
