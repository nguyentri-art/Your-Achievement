const { validationResult } = require('express-validator');

const userModel = require("../models/user");

//#region show get path="/signIn"
exports.signIn = (req,res,next) => {
    console.log(req.session.isLoggedIn);
    let message = req.flash('error');
    if(message.length > 0){
        message = message[0]
    } else {
        message = null;
    }
    res.render("signIn",{
        pageTitle:"Sign In",
        path:"/signIn",
        errorMessage:message,
        isAdmin:false,
        oldInput:{
            email:"",
            password:"",
        },
        validationErrors:[]
    });
}
//#endregion

//#region show post path="/signIn"
exports.postSignIn = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password

    console.log(password.length);

    let message = req.flash('error');
    if(message.length > 0) {
        message = message[0]
    } else {
        message = null;
    }
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(422).render('signIn',{
            pageTitle: "Sign In",
            path: "/signIn",
            errorMessage:message,
            oldInput:{
                email:email,
                password:password,
            },
            validationErrors: error.array(),
            isAdmin:false,
        });
    }
    //#region login validation
    userModel.findOne({email:email,password:password}).then(user => {
        if(!user){
            return res.status(422).render("signIn",{
                path:"/signIn",
                pageTitle: "Sign In",
                errorMessage: 'invalid email or password',
                oldInput:{
                    email:email,
                    password:password
                },
                validationErrors: [],
                isAdmin:false,
            });
        }
        //#endregion validation checking
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
            console.log(err);
            res.redirect("/");
        })
    })
}

//#endregion

//#region Post sign up
exports.signOut = (req,res,next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
}
//#endregion


//#region get path="/signUp"
exports.signUp = (req,res,next) => {
    res.render("signUp",{
        pageTitle:"Sign Up",
        path:"/signUp"
    })
}
//#endregion

//#region post signUp path="/signUp"
exports.postSignUp = (req,res,next) => {
    const name = req.body.name_signUp;
    const email = req.body.email_signUp;
    const password = req.body.password_signUp;

    const newUser = new userModel({
        name: name,
        email:email,
        password:password,
        admin:false
    });

    res.redirect("/");
    return newUser.save();
}

//#endregion    