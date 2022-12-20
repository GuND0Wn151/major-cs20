const Share_api = require("express").Router();
const EncryptRsa = require("encrypt-rsa").default;
const encryptRsa = new EncryptRsa();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const {mailOptions} = require("../utils/mailOptions")

const Encrypt_text = (password, public) => {
   const public_text = encryptRsa.encryptStringWithRsaPublicKey({
      text: password,
      publicKey: public,
   });
   return public_text;
};
var transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: "kmaheshguptha15@gmail.com",
            pass: "gxnexytjprecdkxs",
         },
      });
// const Decrypt_text = (encrypted_text, private) => {
//    const password = encryptRsa.decryptStringWithRsaPrivateKey({
//       text: encrypted_text,
//       privateKey: private,
//    });
//    return password;
// };

Share_api.post("/", async (request, res) => {
   const Receiver = await User.findOne({ publicKey: request.body.publicKey });
   const Sender  = await User.findOne({privateKey:request.body.privateKey})
   if (!Receiver.email) return res.status(400).send("Invalid Keys");
   else {
      console.log(request.body.password,request.body.publicKey)
      const encryptedData  =  Encrypt_text(request.body.password,request.body.publicKey)
      const options = mailOptions(Sender.name,encryptedData)
      transporter.sendMail(options, function (err, info) {
         if (err) console.log(err);
         else console.log(info);
      });
   }
});

module.exports = Share_api;
