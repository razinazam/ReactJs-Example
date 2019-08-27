const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const upload = new Schema(
    {
    path : String,
    Author:String,
    Title:String,
    Details:String,
    user:{
        Username:String,
        Fullname:String,
        Email:String,
        Password:String
     }
    },
    
    )

module.exports = mongoose.model("dp",upload)