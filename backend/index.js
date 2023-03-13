const express = require("express")
const cors= require("cors")
const app = express()
const dotevn = require("dotenv");
const mongoose =require("mongoose")
const connectDb = require("./utils/connectDb")
const router = require("./utils/apis")
const bodyParser = require("body-parser");
const Share_api = require("./utils/Share");
const Decrypt_api = require("./utils/Decrypt");
const Post_Api = require("./utils/Post")
const Getuser = require("./utils/Getuser");
const UpdateUser = require("./utils/UpdateUser");
const Session_api = require("./utils/Session");
const Open_api = require("./utils/Open");
const Search_api = require("./utils/Search");
const Keys_api = require("./utils/Getkeys");

app.use(cors())
dotevn.config()  


app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
connectDb()
app.use(express.json())
const port = process.env.port
app.use("/api/auth",router)
app.use("/api/share",Share_api)
app.use("/api/decrypt",Decrypt_api)
app.use("/api/",Post_Api)
app.use("/users/",Getuser)
app.use("/update/",UpdateUser)
app.use("/api/session",Session_api)
app.use("/open/",Open_api)
app.use("/search",Search_api)
app.use("/getkeys",Keys_api)
app.listen(port,()=>{
      console.log(`Listening on port ${port}`)
})