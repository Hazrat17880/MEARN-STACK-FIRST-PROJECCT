const express = require('express');
const routes = express.Router();


// here this is for fething the data
const Details = require("../models/Details");
const Slider_table = require('../models/slider');
const Myservices = require("../models/services")
const Contact_form = require("../models/constact")


routes.get("/", async(req,res)=>{
    const details =  await Details.findOne({"_id":"64e8e35f060673b8d1b8adef"});
    const slides = await Slider_table.find();
    const servicess = await Myservices.find();

    // console.log(slides)
    // console.log(details)

    res.render("index",{
        details:details,
        slides:slides,
        servicess:servicess
    })

})


routes.get("/gallery", async(req,res)=>{
    const details =  await Details.findOne({"_id":"64e8e35f060673b8d1b8adef"});
    res.render("gallery",{
        details:details
    })
})

routes.post("/proces-contact-form", async(req,res)=>{
    console.log("this form is submitted")
    console.log(req.body)

    // save the data into the database
    try{
        const data = await Contact_form.create(req.body)
        console.log("your data is here :",data)
        res.redirect("/")

    }catch(e){
        console.log("the occurs erros :",e)
        res.redirect("/")
    }
})

// for services page coding is here
routes.get("/services",(req,res)=>{
    res.render("services")
})

module.exports = routes;

