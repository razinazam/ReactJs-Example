const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SignUp = new Schema({
  image:String,
  Fullname: String,
  Email: String,
  Password: String,
  Phone: String,
});

module.exports = mongoose.model("SignIn", SignUp);
