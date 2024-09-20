const Signup = require("../modules/signup.modules");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // const userExist = await Signup.find({ email: email });

    // if (userExist) {
    //   return res.status(400).json("user already exist");
    // }

    const userCreated = await Signup.create({ name, email, password });

    res.status(200).json(userCreated);
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
};

module.exports = signup;
