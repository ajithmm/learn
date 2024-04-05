const path = require("path");
const Groups = require("../models/group");

module.exports = {
  home: async (req, res) => {
        // console.log("groups");
        res.render("home");
    },

    index: async (req, res) => {
      const students =await Groups.find({});
      console.log(students)
      res.render("index",{users:students});
  },
    

  get_group: async (req, res) => {
   
    console.log("groups");
    res.render("groupForm");
  },
  post_group : async (req, res) => {
    const { names, head, place } = req.body;
    console.log(names, head, place);

    const newPerson = new Groups({ names, head, place });
    try {
      await newPerson.save();

      res.render("index");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
};
