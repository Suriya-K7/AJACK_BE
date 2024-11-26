// config donenv
require("dotenv").config();

// configure express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { ATLAS_URI } = require("./utils/config");

//importing router

//setting up app
const app = express();
app.use(cors());
app.use(express.json());

//connect to database
mongoose.set("strictQuery", false);

mongoose.set("strictPopulate", false);

mongoose
  .connect(ATLAS_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("welcome to OMDB");
});

//export default module
module.exports = app;
