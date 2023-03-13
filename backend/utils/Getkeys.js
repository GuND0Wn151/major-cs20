const Keys_api = require("express").Router();
const UserCreds = require("../models/UserCreds"); // assuming the UserCreds model is exported from "./UserCreds"

Keys_api.post('/', async (req, res) => {
  try {
    const { userId } = req.body;
    const userCredentials = await UserCreds.find({ userid:userId });
    res.json(userCredentials);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = Keys_api