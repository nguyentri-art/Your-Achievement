const express = require('express');


const achievementRouter = require("../controllers/achievement");

const auth = require("../controllers/auth");

const router = express.Router();

router.get("/",achievementRouter.main);

router.get("/achievement",achievementRouter.achievement);

//#region auth signIn signUp signOut

router.get("/signUp", auth.signUp);

router.post("/signUp", auth.postSignUp);

router.get("/signIn",auth.signIn);

router.post("/signIn", auth.postSignIn);

router.post("/signOut", auth.signOut);

//#endregion

module.exports = router;

