const Joi = require("@hapi/joi");

const registerValidate =(data)=>{
      const Schema=Joi.object({
            name:Joi.string().required().min(3).max(255),
            email:Joi.string().required().min(3).max(255).email(),
            password:Joi.string().required().min(3).max(255),
      })
      return Schema.validate(data)
}


const loginValidate=(data)=>{
      //console.log(data)
      const Schema=Joi.object({
            email:Joi.string().required().min(3).max(255).email(),
            password:Joi.string().required().min(3).max(255)
      })
      return Schema.validate(data)
}

module.exports.registerValidate = registerValidate
module.exports.loginValidate = loginValidate