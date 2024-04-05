const express = require("express");
const router = express.Router();

const college = require("../controlers/coolegeControler");

router.get("/home", college.home);
router.get("/", college.index);
router.get("/college", college.get_college);
router.post("/college", college.post_college);
router.get("/home", college.home);

module.exports = router;