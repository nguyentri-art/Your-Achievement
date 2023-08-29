const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInfo = new Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    admin:{
        type:Boolean,
        require:true
    }
}, { timestamp: true });

module.exports = mongoose.model("User",userInfo);