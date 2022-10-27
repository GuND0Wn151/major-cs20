const express = require("express")
const cors= require("cors")
const app = express()
const dotevn = require("dotenv");
const mongoose =require("mongoose")
const connectDb = require("./utils/connectDb")
const router = require("./utils/apis")
const bodyParser = require("body-parser");

app.use(cors())
dotevn.config()  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDb()
app.use(express.json())
const port = process.env.port
app.use("/api/auth",router)
app.listen(port,()=>{
      console.log(`Listening on port ${port}`)
})