const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignupModel = require("./models/signup.models");

const app = express();

app.use(express.json());
app.use(cors);

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/", (req, res) => {
  SignupModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen("5000", () => {
  console.log("server satrt at localhost:5000");
});
