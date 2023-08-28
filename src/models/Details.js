const mongoose = require("mongoose")
const Detaills = mongoose.Schema({
    BrandName:String,
    brandiconurl:String,
    links:[{
        label:String,
        url:String
    }]
});

const details = mongoose.model("My Details",Detaills);
module.exports = details;