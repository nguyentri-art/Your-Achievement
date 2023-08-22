const mongoose = require('mongoose');
const passport = require('passport');

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const clientId = "XXXXX";
const clientKey = "XXXXX";

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test',{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('Connected to test database');
    } catch (error){
        console.error(error);
    }
}
connectToDatabase();


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        unique:true
    },
    achievement:{
        type:String,
    },
    feel:{
        type:String,
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users',UserSchema);
User.createIndexes();

passport.use(new GoogleStrategy({
    clientID:     clientId,
    clientSecret: clientKey,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      if(err) {
        console.log(err);
      } else {
        user.name = profile.name;
        user.email = profile.email[0].value;
        user.save(function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log('User saved successfully');
          }
        });
      }
      return done(err, user);
    });
  }
));

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");

app.use(express.json());
app.use(cors());                                    
app.get("/", (req,res) => {
    res.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000
    // If you see App is working means
    // backend working properly
});

app.get("/auth/google", passport.authenticate('google', {
    scope: ['email','profile']
}));

app.get("/auth/google/callback",
    passport.authenticate( 'google', {
        successRedirect: "/auth/google/success",
        failureRedirect: "/auth/google/failure"
}));

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        // const userAchie = new userAchievement(req.body);
        let result = await user.save();
        // let resultAchie = await userAchie.save();
        result = result.toObject();
        // resultAchie = resultAchie.toObject();
        if (result) {
            delete result.password;
            // delete resultAchie.password;
            resp.send(req.body);
            console.log(result);
            // console.log(resultAchie);
        } else {
            console.log("User already register");
        }
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});




app.listen(5000);


