const Search_api = require("express").Router();
const User = require("../models/User"); // import the User model

Search_api.post("/", async (req, res) => {
  const username = req.body.name;
  try {
    const users = await User.find({ name: { $regex: username, $options: "i" } }); // find users whose name contains the substring `username`
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = Search_api;