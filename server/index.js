const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const SignupModel = require("./models/signup.models");

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors);

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.post("/", (req, res) => {
  SignupModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("data base connected");
    app.listen(PORT, () => {
      console.log(`server is running at localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
