const express = require('express');

const achievementRouter = require("../controllers/achievement");

const auth = require("../controllers/auth");

const router = express.Router();

router.get("/",achievementRouter.main);

//#region auth signIn signUp signOut

router.get("/signUp", auth.signUp);

router.post("signUp" [
    body('email')
    .isEmail()
    .withMessage("Enter a correct email address.")
    .normalizeEmail(),
    body('password', "Password has minimum is 5")
    .isLength({min:5})
    .isAlphanumeric()
    .trim()
], auth.postSignUp);

router.get("/signIn",auth.signIn);

router.post("/signIn" [
    body('email')
    .isEmail()
    .withMessage("Enter a correct email address.")
    .normalizeEmail(),
    body('password', "Password has to be correct")
    .isLength({min: 5})
    .isAlphanumeric()
    .trim()
], auth.postSignIn);

router.post('/signOut', auth.signOut);

//#endregion

module.exports = router;

