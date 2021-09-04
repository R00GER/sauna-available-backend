const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  const foundedUser = await User.findOne({ email });

  const passwordMatch = password === foundedUser.password;

  if (passwordMatch) {
    return res.send(foundedUser);
  }

  return res.status(401).json({ message: "Wrong email or password" });
});

module.exports = loginRouter;
