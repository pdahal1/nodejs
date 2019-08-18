var express = require('express'); 
var router = require('express'); 

router('/tasks', function (req, res, next) {
    res.send('TASK API');

}); 

module.exports = router; 