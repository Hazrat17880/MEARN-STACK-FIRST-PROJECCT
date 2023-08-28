const { MongoServerClosedError } = require("mongodb")
const mongoose = require("mongoose")
const Slider = mongoose.Schema({
    title:String,
    subtitle:String,
    imageurl:String,
    class:String

})

const Slider_table = mongoose.model("Slider Table",Slider);
module.exports = Slider_table;