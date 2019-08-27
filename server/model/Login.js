const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Login = new Schema({
  Email: String,
  Password: String
});

module.exports = mongoose.model("Login", Login);
