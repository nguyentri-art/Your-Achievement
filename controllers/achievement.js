const userInfo = require("../models/user");
const achivement = require("../models/achivement");

//#region show path="/"
exports.main = (req,res,next) => {
    // show all achievement.
    let signIn;
    if(!req.session.user){
        signIn = false;
        achivement.find().then(achi =>{
            res.render("main",{
                pageTitle:"Achievement",
                path:"/",
                prods:achi,
                admin:false,
                user:signIn
            });
        })
    } else {
        const userId = req.session.user._id
        let checkAdmin
        signIn = true;
        userInfo.findById(userId).then(user => {
            checkAdmin = user.admin
            achivement.find().then(achi => {
                res.render("main",{
                    pageTitle:"Achievement",
                    path:"/",
                    prods:achi,
                    admin: checkAdmin,
                    user:signIn
                });
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
//#endregion

//#region show get="/achievement" create new achievement.
exports.achievement = (req,res,next) => {
    const userId = req.session.user._id
    let checkAdmin

    userInfo.findById(userId).then(user => {
        checkAdmin = user.admin     
        res.render("achievement",{
            pageTitle:"Create Achievement",
            path:"/achievement",
            admin: checkAdmin,
            prods: user
        });
    })
}
//#endregion

//#region show post="/achievement" create new achievement.
exports.postAchievement = (req,res,next) => {
    const nameAchieve = req.body.nameAchieve 
    const tagAchieve = req.body.tagAchieve
    const feelingAchieve = req.body.feelingAchi

    const userId = req.session.user._id
    let checkAdmin
    const newAchievement = new achivement({
        nameAchieve:nameAchieve,
        tagAchieve:tagAchieve,
        feelingAchieve:feelingAchieve,
        postedBy:userId
    });

    return newAchievement.save();
}

//#endregion


