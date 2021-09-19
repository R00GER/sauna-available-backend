const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
  apartment: { type: String },
});

module.exports = mongoose.model("User", userSchema);
