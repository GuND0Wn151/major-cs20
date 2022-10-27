const mongoose= require("mongoose")
const  connectDb=()=>{
      mongoose.connect(
            process.env.MONGO_URI,
            { useNewUrlParser: true, useUnifiedTopology: true },
            ()=>{
                  console.log("connected to db successfully!!")
            }
      )
}

module.exports= connectDb