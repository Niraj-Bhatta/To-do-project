const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title: {type: String,required : true, required: true,unique : true , max_length : 20 , min_length: 3, trim: true
        },
        desc : {type:String}
    },
    {
        timestamps : true
    }
)

const Todo = mongoose.model("todo",todoSchema)

module.exports = todoSchema;