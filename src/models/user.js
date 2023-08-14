var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userNameSchema = new Schema({
    userName: String,
    achievement: String,
    feeling: String,
    tag: String
});

module.exports = mongoose.model('User', userNameSchema);