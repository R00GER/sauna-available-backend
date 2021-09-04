const registrationRouter = require("express").Router();
const User = require("../models/User");

registrationRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  const foundedUser = await User.findOne({ email });

  if (foundedUser) {
    return res.status(409).json({ message: "Email alredy exsists" });
  }

  const newUser = User({
    email,
    password,
  });

  try {
    const savedUser = newUser.save();
    return res.status(201).json({ message: "New user created succesfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = registrationRouter;
