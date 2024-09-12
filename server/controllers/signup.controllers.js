const User = require("../models/signup.models");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.find({ email: email });

    if (userExist) {
      return res.status(400).json("user already exist");
    }

    const userCreated = await User.create({ name, email, password });

    res.status(200).json(userCreated);
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
};

module.exports = signup;
