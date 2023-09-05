const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const flash = require('connect-flash');
const multer = require('multer');

const errorLoadPage = require('./controllers/error');

const userModel = require('./models/user');

const achievementRoutes = require("./routes/routeLanding");

const MONGODB_URI = "mongodb+srv://admin_charity:WwFcZnIJQFVDNJKq@yachievement.tyjrtys.mongodb.net/?retryWrites=true&w=majority"

const app = express();

// #region store 
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
})
// #endregion

//#region session 
app.use((req, res, next) => {
    if (req.session === null || req.session === undefined) {
        return next();
    }
    userModel.findById(req.session.user._id).then(user => {
        if (!user) {
            return next();
        }
        req.user = user
        next();
    }).catch(err => {
        next(new Error(err));
    })
})
//#endregion

app.set("view engine", "ejs");
app.set("views", "views");

app.set('views', path.join(__dirname, 'views'));

app.use('/images', express.static(path.join(__dirname,'images')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// #region session
app.use(
    session({
        secret: "SERCET THINGS",
        resave: false,
        saveUninitialized: false,
        store: store
    })
);
//#endregion

//Routes
app.use(flash());

// #region session isLogin
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    // console.log(req.locals.isAuthenticated)
    // next();
    console.log(res.locals.isAuthenticated + " this Authenticated")
    next();
})
// #endregion

app.get("/cancel", (req,res) => res.send("Canncelled"));

app.use(achievementRoutes);

app.use(errorLoadPage.get404);

mongoose.connect(MONGODB_URI).then(result => {
    app.listen(3000)
}).catch(err => console.log(err))
console.log("Let's go")
