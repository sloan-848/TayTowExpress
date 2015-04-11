var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Votes = require('../models/Votes.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/votes', function(req,res) {
  Votes.find({},{},function(e,docs){
    res.type('json');
    res.jsonp(docs);
  });
});


/*router.post('/votes', function(req,res) {
  var sub_email = req.body.email;
  var sub_pres = req.body.president;
  var sub_vicepres = req.body.vice_president;
  var sub_treasurer = req.body.treasurer;
  var sub_webmaster = req.body.webmaster;

  var verified = (sub_email && sub_pres && sub_vicepres && sub_treasurer && sub_webmaster);

  if(verified){
    var count = Votes.count( {'email': sub_email}, function(err, c){
      console.log(c);
      if (c == 0){
        //Insert entry into db
        Votes.create({
          "email": sub_email,
          "vote_president": sub_pres,
          "vote_vice_president": sub_vicepres,
          "vote_treasurer": sub_treasurer,
          "vote_webmaster": sub_webmaster
        });
        res.send("Your vote was counted!");
      } else {
        //Update current entry
        Votes.findOneAndUpdate({ email: sub_email}, {
          "vote_president": sub_pres,
          "vote_vice_president": sub_vicepres,
          "vote_treasurer": sub_treasurer,
          "vote_webmaster": sub_webmaster
        }, function(){
          console.log('updated entry at', sub_email);
          res.send("Your vote was updated!");
        });
      }
    });
  }
  else {
    res.send("Invalid form data");
  }
});*/

module.exports = router;
