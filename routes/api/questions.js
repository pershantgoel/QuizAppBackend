const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

//Load Question model
const Question = require("../../models/Question");

//@type     GET
//@route    /api/questions
//@desc     route for showing all questions
//@access   PUBLIC
router.get("/" , (req,res)=>{
    Question.find().then(
        questions=> res.json(questions)
    ).catch(err => res.json({noquestions:"no questions to display"}))
})

 module.exports = router;