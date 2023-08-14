var express = require('express');
var User = require('../models/userName');
var router = express.Router();

router.get('/', function(req,res) {
    console.log('getting all username');

    User.find({}).exec(function(err, users){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(users);
            res.json(users);
        }
    });
});

router.get('/:id', function(req, res){
    console.log('getting one username');
    User.findOne({
        _id: req.params.id
    }).exec(function(err, user){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(user);
            res.json(user);
        }
    });
});

module.exports = router;