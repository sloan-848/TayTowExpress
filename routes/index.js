var express = require('express');
var util = require('util');
var exec = require('child_process').exec;
var router = express.Router();

/* Test for post, eventually will be webhook for github deployment */
router.post('/pullGit', function(req, res, next) {
  child = exec('sh ' + __dirname + '/../scripts/pullRepo.sh',
    function(error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if(error !== null){
        console.log('exec error: ' + error);
      }
  });
  res.send('It Worked!');
});


module.exports = router;
