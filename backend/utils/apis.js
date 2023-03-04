const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const EncryptRsa = require("encrypt-rsa").default;
const { registerValidate, loginValidate } = require("./validations");
const encryptRsa = new EncryptRsa();

router.post("/register", async (request, res) => {
   //console.log(request.body);
   const joiValidation = registerValidate(request.body);
   var message = "";
   var status = true;
   if (joiValidation.error) message = joiValidation.error.details[0].message;

   const checkEmail = await User.findOne({ email: request.body.email });
   if (checkEmail) {
      status = false;
      message = "Email already exists";
   }

   const checkName = await User.findOne({ email: request.body.name });
   if (checkName) {
      status = false;
      message = "Name already exists";
   }

   const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(request.body.password, salt);
   const user = new User({
      name: request.body.name,
      email: request.body.email,
      password: hashedPassword,
      public_key: publicKey,
      private_key: privateKey,
      profile_image: { contentType: "image/*", data: request.body.image },
   });

   try {
      if (status) {
         const savedUser = await user.save();
         console.log("here");
         return res.status(200).json("heeww");
      } else {
         return res.status(400).json({ message: message });
      }
   } catch (error) {
      //console.log(error);
      console.log("hmm");
   }
});

router.post("/login", async (request, res) => {
   const joiValidation = loginValidate(request.body);
   //console.log(request.body);

   if (joiValidation.error)
      return res.status(400).send(joiValidation.error.details[0]);

   const dbmail = await User.findOne({ email: request.body.email });

   if (!dbmail) return res.status(400).send("Email is not Registered");

   const pass = await bcrypt.compare(request.body.password, dbmail.password);

   if (!pass) {
      console.log("herexxxxxxxxxxxxxxxxxx");
      return res.status(400).send("Invalid Password");
   } else {
      console.log(pass);
      const token = jwt.sign({ _id: dbmail._id }, "SomeRandomSecretWord");
      res.set("auth-token", token).send({
         token: token,
         mail: dbmail.email,
         dbmail,
      });
   }
});

module.exports = router;
