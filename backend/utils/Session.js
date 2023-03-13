const Session_api = require("express").Router()
const UserCreds = require("../models/UserCreds")

Session_api.post("/", async (req,res)=>{
      console.log(req.body)
      const checkuser = await UserCreds.findOne({})

})

module.exports = Session_api
