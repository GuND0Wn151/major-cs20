const Session_api = require("express").Router();
const UserCreds = require("../models/UserCreds");

Session_api.post("/", async (req, res) => {
   const data = req.body;

   try {
      let userCredentials = await UserCreds.findOne({ userId:data.Userid });

      if (!userCredentials) {
         userCredentials = new UserCreds({
            Platform:data.Platform,
            userId: data.Userid,
            senderEmail: data.Sender_mail, 
            endDate: data.end_date, 
            credentials: [[data.username, data.password]],
         });
      } else {
         userCredentials.credentials.push([data.username, data.password]);
      }

      await userCredentials.save();
      res.json({ message: "Credentials saved successfully" });
   } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
   }
});

module.exports = Session_api;
