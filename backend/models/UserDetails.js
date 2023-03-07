const mongoose = require("mongoose");

const userDetailSchema = mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   Age: {
      type: Number,
   },
   Description: {
      type: String,
   },
   Location: {
      type: String,
   },
   Occupation: {
      type: String,
   },
   Company:{
      type:String,
   }
});

module.exports = mongoose.model("UserDetail",userDetailSchema)
