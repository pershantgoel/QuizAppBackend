const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const questions = require("./routes/api/questions")

const app = express();

//mongoDB configuration
const db = require("./setup/url").mongoURL;

//Attempt to connect to database
mongoose.connect(db, {useNewUrlParser: true}).then((req,res)=>{
    console.log("DB connection successfull")
}).catch(err => console.log("Error forDB is::::",err));

//actual route
app.use("/",questions);

var port = process.env.PORT || 3005;
app.listen(port,(req,res)=>{
    console.log(`listening to ${port}`);
});