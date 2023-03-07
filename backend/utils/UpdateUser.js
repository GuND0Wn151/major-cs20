const UpdateUser = require("express").Router();
const Userdetails = require("../models/UserDetails");

UpdateUser.post("/:userid", async (req, res) => {
   const userId = req.params.userid;
   var data = {};

   try {
      for(let prop in req.body){
         console.log(req.body[prop])
      }
      for (let prop in req.body) {
         if (req.body[prop]!="") {
            data[prop] = req.body[prop];
         }
      }
      console.log(data)
      const user = await Userdetails.findOneAndUpdate(
         { userId: userId },
         data,
         { new: true, upsert: true }
      );
      res.json(user);

      console.log("hyyyyy")
      //console.log(req.body)
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = UpdateUser;
