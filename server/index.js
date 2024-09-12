const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Signup = require("./models/signup.models");
// const controllers = require("./controllers/signup.controllers");

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors);

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// app.route("/signup").get(controllers.Signup);

// app.get("/signup", () => {
//   controllers.Signup;
// });
app.post("/signup", (req, res) => {
  Signup.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// app.post("/signup", (req, res) => {});
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("data base connected");
    app.listen(PORT, () => {
      console.log(`server is running at localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
