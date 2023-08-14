const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url ='mongodb+srv://admin_charity:WwFcZnIJQFVDNJKq@yachievement.tyjrtys.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:27017/Achivement';
async function serverdb() {
    try {
        await mongoose.connect(url);
        console.log("Yesssssssss");
    }
    catch (error) {
        console.log("Error");
    }
}


app.listen(3000,() => {
    console.log("Server started on port 3000");
});

export default serverdb;