const userInfo = require("../models/user");

//#region show path="/"
exports.main = (req,res,next) => {
    // show all achievement.
    res.render("main",{
        pageTitle:"Achievement",
        path:"/"
    }).catch(err =>{
        console.log(err);
    });
}
//#endregion

//#region show post="/achievement"

//#endregion


