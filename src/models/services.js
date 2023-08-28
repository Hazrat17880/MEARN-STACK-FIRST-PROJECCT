const mongoose = require("mongoose");
const Services = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkstext:String,
    links:String
    
})

const Servicestable = mongoose.model("Service Table",Services);
module.exports = Servicestable;