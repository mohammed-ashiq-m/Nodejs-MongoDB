var express = require('express');
var router = express.Router();

let dbconfig=require('../dbconfig/db-config');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.hbs', { title: 'Log-In' });
});

router.post('/login',function(req,res){
console.log("gggggg");
  let username=req.body.username;
  let password=req.body.password;

  dbconfig.get().collection("signUpForm").findOne({username:username,password:password},function (err,user) {
    if (err) {
      console.log('error', err)
      res.send(false);
    } else {

      if(user){
        res.send(true);
      }
      else{
        res.send(false)
      }

    }
  })

});
module.exports = router;
