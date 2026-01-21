const mongoose = require("mongoose");

const foodsSchema = new mongoose.Schema({
  name: { type: String },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  pantry: [foodsSchema],
});

module.exports = mongoose.model("User", userSchema);
