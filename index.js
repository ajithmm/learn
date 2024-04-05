const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

const { connectMongoDB } = require("./connection");
const mongoURI = "mongodb://127.0.0.1:27017/rahul";
connectMongoDB(mongoURI);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const group = require("./routes/group");
app.use("/", group);

const college = require("./routes/collegeRouter");
app.use("/",college)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});