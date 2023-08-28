const mongoose = require("mongoose");
const Contact = mongoose.Schema({
    email:String,
    phone:Number,
    query:String
})

const Contact_model = mongoose.model("Contact Table",Contact);

module.exports = Contact_model;