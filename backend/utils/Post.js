const Post = require("../models/Post");
const Post_Api = require("express").Router();

Post_Api.post("/post", async (req, res) => {
   console.log(req.body);

   var status = true;
   if (!req.body.email && !req.body.title && !req.body.message) {
      res.status(400).send("Enter Valid Post Details");
   }
   const newPost = new Post({
      title: req.body.title,
      text: req.body.message,
      mail: req.body.email,
   });
   try {
      if (status) {
         const savedPost = await newPost.save();
         ///console.log("here")
         return res.status(200).json("heeww");
      } else {
         return res.status(400).json({ message: "something went wrong" });
      }
   } catch (error) {
      //console.log(error);
      console.log("hmm");
   }
});


Post_Api.get("/getposts",async (req,res)=>{
            try{
                  const posts = await Post.find().sort({ createdAt: -1 }).limit(10);
                  res.json(posts)
            }catch(err){
                  res.status(500).json({message:err.message});
            }
})

module.exports = Post_Api;
