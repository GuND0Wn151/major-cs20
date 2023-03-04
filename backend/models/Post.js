const mongoose = require("mongoose");

const postSchema= mongoose.Schema({
      title:{
            type:String,
            trim:true,
            required:true,
      },
      text:{
            type:String,
            trim:true,
            required:true
      },
      date:{
            type:Date,
            default:Date.now,     
      },
      mail:{
            type:String,
            trim:true,
            required:true

      },
})

module.exports=mongoose.model("Post",postSchema)