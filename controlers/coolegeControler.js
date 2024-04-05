const path = require("path");
const newes = require("../models/collegeModels");


module.exports = 
{
    home : async(req, res) => {
     res.render("home");   
    },

    index : async(req, res) => {
      res.render("index");   
     },
 

    get_college : async(req, res) => {
        // console.log("college")
        res.render("college")
    },


    post_college :async(req, res) => {
        const{colleges,city,usn} = req.body;
        console.log(colleges,city,usn);

    const newCollege = new newes({colleges,city,usn });
    try {
      await newCollege.save();
 
     res.render("home");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error cant able to proceed...better luck next time");
    }
    }

}
