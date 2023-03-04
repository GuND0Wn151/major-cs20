const router = require("express").Router();
const User = require("../models/User");

router.get("/:userid", async (req, res) => {
   const userId = req.params.userid;

   try {
      const user = await User.findById(userId);
      if (!user) {
         res.status(400).send("User not found");
      }
      res.send(user)
   } catch (err) {
      res.status(400).send(err);
   }
});
module.exports = router;
