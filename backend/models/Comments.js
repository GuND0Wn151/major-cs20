import mongoose, { Schema } from "mongoose";

const commentSchema  = mongoose.Schema({
      author:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true,
      },
      content:{
            type:String,
            required:true,
      },
      comments:{
            type:Schema.Types.ObjectId,
            ref:"Comment",

      },
      date:{
            type:Date,
            default:Date.now,
      }
})

module.exports= mongoose.model("Comment",commentSchema)