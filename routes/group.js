const express = require("express");
const router = express.Router();

const group = require("../controlers/group.js");

router.get("/add", group.get_group);
router.get("/", group.index);
router.get("/index", group.index);
router.get("/home", group.home);
router.post("/add", group.post_group);

module.exports = router;
