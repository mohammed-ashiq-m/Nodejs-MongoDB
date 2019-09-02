var express = require('express');
var router = express.Router();
let ObjectId=require('mongodb').ObjectId;


let dbconfig=require('../dbconfig/db-config');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('update');
    console.log('updationready')
});

router.put('update/:id', function(req,res){
    const data = req.body;
    dbconfig.get().collection('signUpForm').update({_id: ObjectId(req.params.id)}, {$set: data},function(err, result){
        if(err){
            console.log(err);
        }
        res.send('updated successfully');
    });
});



module.exports = router;