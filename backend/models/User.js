const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      max: 255,
      unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
   public_key: {
      type: String,
      required: true,
      unique: true,
   },
   private_key: {
      type: String,
      required: true,
      unique: true,
   },
   profile_image: {
      contentType: {
         type: String,
         required: true,
      },
      data: {
         type: Buffer,
         required: true,
      },
   },
});

module.exports = mongoose.model("User", userSchema);