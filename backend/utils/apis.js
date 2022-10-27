const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { registerValidate, loginValidate } = require("./validations");

router.post("/register", async (request, res) => {

  console.log(request.body)
  const joiValidation = registerValidate(request.body);
  if (joiValidation.error)
    res.status(400).send(joiValidation.error.details[0].message);
  const checkEmail = await User.findOne({ email: request.body.email });
  if (checkEmail) return res.status(400).send("Email already exists");
  const checkName = await User.findOne({ email: request.body.name });
  if (checkName) return res.status(400).send("Name already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);
  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    //console.log(savedUser)
    res.send({ user: savedUser.name, user: savedUser.email });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/login", async (request, res) => {
  const joiValidation = loginValidate(request.body);
  console.log(request.body)
  if (joiValidation.error)
    return res.status(400).send(joiValidation.error.details[0]);
  const dbmail = await User.findOne({ email: request.body.email });
  if (!dbmail) return res.status(400).send("Email is not Registered");
  const pass = bcrypt.compare(request.body.password, dbmail.password);
  if (!pass) {
    return res.status(400).send("Invalid Password");
  } else {
    const token = jwt.sign({ _id: dbmail._id }, "SomeRandomSecretWord");
    res.set("auth-token", token).send({ token: token, mail: dbmail.email });
  }
});

module.exports = router;
