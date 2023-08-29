const express = require('express');

const achievementRouter = require("../controllers/achievement");

const auth = require("../controllers/auth");

const router = express.Router();

router.get("/",achievementRouter.main);

router.get("/signIn", s)

module.exports = router;

