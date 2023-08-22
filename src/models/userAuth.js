var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userAuth = new Schema({
    userName: String,
    email: String,
});

module.exports = mongoose.model('UserAuth',userAuth);