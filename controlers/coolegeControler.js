const path = require("path");
const Group1= require("../models/collegeModels");


module.exports = {
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
Details: async(req, res) => {
      // console.log("college")
      const details = Group1.find({});
      console.log(details)
      res.render("collegeDetails",{clgs:details})
  },


    post_college :async(req, res) => {
        const{ college,city,usn} = req.body;
        console.log(college,city,usn);

    const newCollege = new Group1({college,city,usn });
    try {
      await newCollege.save();
      console.log("yeah.. you are here");
    res.render("collegeDetails");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error cant able to proceed...better luck next time");
    }
    }

}
