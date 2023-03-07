const router = require("express").Router();
const User = require("../models/User");
const Userdetails = require("../models/UserDetails")
router.get("/:userid", async (req, res) => {
   const userId = req.params.userid;
   try {
      const user = await User.findById(userId);
      const userDetails = await Userdetails.findOne({userId})
      //console.log(userId,user,userDetails)
      //console.log(user.name)
      if (!user) {
         res.status(400).send("User not found");
      }
      res.send({user,userDetails})
   } catch (err) {
      res.status(400).send(err);
   }
});

module.exports = router;