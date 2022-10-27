import mongoose, { Mongoose, Schema } from "mongoose";

const postSchema=new mongoose.Schema({
      title:{
            type:String,
            trim:true,
            required:true,
      },
      text:{
            type:String,
            trim:true,
            required:True
      },
      data:{
            type:Date,
            default:Date.now,     
      },
      comment:{
            type:Schema.Types.ObjectId,
            ref:"Comment"
      }
})

module.exports=mongoose.Schema("Post",postSchema)