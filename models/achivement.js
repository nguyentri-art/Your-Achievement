const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const achievementInfo = new Schema({
    nameAchieve:{
        type: String,
        require:true,
    },
    tagAchieve:{
        type:String,
        require:true
    },
    feelingAchieve:{
        type:String,
        require:true
    },
    postedBy: {
        type:Schema.Types.ObjectId,
        body:"string",
        ref: "User",
        require:true
    }
}, {timestamps: true });

module.exports = mongoose.model("Achieve",achievementInfo);
