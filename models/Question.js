const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema will be defined here
const QuestionSchema = new Schema({
    
    textone:{   //it will contain the questions
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }
    
})
module.exports = Question = mongoose.model("myquestions",QuestionSchema);