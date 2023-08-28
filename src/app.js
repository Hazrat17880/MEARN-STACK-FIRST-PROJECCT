const exp = require("express");
const path = require("path")
const mongoose = require("mongoose")
const app = exp();
const hbs = require("hbs");
const port = process.env.port || 4444;
const Details = require("./models/Details")
const slider = require("./models/slider")
const Services = require("./models/services")
const bodyparser=  require("body-parser");



// setting the routes here 
const routes = require("./routes/main");
const Slider_table = require("./models/slider");
app.use(bodyparser.urlencoded({extended:true}))
app.use("", routes);



// (templates engine)
app.set("view engine", "hbs");
app.set("views", "views");


// set the static file here
const staticpath = path.join("public")
app.use(exp.static(staticpath))


// set the parital folder here
hbs.registerPartials("views/partials")









// Database Connection
mongoose.connect("mongodb://localhost/Website_tut")
    .then(() => {
        console.log("Database Connected")
        // Details.create({
        //     BrandName:"Info Technical Solution",
        //     brandiconurl:"https://learncodewithdurgesh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flcwd_logo.45da3818.png&w=640&q=75",
        //     links:[
        //         {
        //             label:"Home",
        //             url:"/"
        //         },
        //         {
        //             label:"Services",
        //             url:"/services"
        //         },
        //         {
        //             label:"Gallery",
        //             url:"/Gallery"
        //         },
        //         {
        //             label:"About",
        //             url:"/about"
        //         },
        //         {
        //             label:"Contact Us",
        //             url:"/contact"
        //         }
        //     ]
        // })

        /// slider database coding is here 
        // slider.create([
        //     {
        //         title:"The First JavaScript Project",
        //         subtitle:"this is my first project using nodejs and express framework",
        //         imageurl:"/images/s1.jpg"
        //     },
        //     {
        //         title:"The Second JavaScript Project",
        //         subtitle:"this is my secocnd project using nodejs and express framework using second images",
        //         imageurl:"/images/s2.jpg"
        //     },
        //     {
        //         title:"The Third JavaScript Project",
        //         subtitle:"this is my third project using nodejs and express framework using third images",
        //         imageurl:"/images/s3.jpg"
        //     }
        // ])

        // services coding is here 
        // Services.create(
        //     {
        //     icon:"fab fa-accusoft",
        //     title:"Provide Best Courses",
        //     description:"We provide best courses that helps students in leanring and in placement",
        //     linkstext:"https://www.learncodewithdurgesh.com",
        //     links:"Check"
        // },
        // {
        //     icon:"fa-brands fa-affiliatetheme",
        //     title:"Learn Projects",
        //     description:"We provide best courses that helps students in leanring and in placement",
        //     linkstext:"https://www.learncodewithdurgesh.com",
        //     links:"Supports"
        // },
        // {
        //     icon:"fa-brands fa-affiliatetheme",
        //     title:"Learn Projects",
        //     description:"We provide best courses that helps students in leanring and in placement",
        //     linkstext:"https://www.learncodewithdurgesh.com",
        //     links:"Supports"
        // },
        
        
        // )

        // contact us form database coding is here 








        
    })


    .catch((Err) => {
        console.log("this error occurs :", Err)
    })









app.listen(port, () => {
    console.log(`connected at port ${port}`)
})