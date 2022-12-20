const Decrypt_api = require("express").Router()
const EncryptRsa = require("encrypt-rsa").default;
const encryptRsa = new EncryptRsa();

const Decrypt_text = (encrypted_text, private) => {
   const password = encryptRsa.decryptStringWithRsaPrivateKey({
      text: encrypted_text,
      privateKey: private,
   });
   return password;
};


Decrypt_api.post("/",(request,res)=>{
      //console.log(request.body)
      var message = Decrypt_text(request.body.message,request.body.privateKey)
      console.log(message)
      res.send({message})
})

module.exports = Decrypt_api