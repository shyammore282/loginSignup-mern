const Login = require("../modules/login.modules");

const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await Login.find({ email: email });

    if (userExist) {
      return res.status(400).json("user alerdy exist please try another email");
    }

    const userCreated = await Signup.create({ name, email, password });

    res.status(200).json(userCreated);
  } catch (err) {
    console.log(error);
    res.status(500).json("internal server error");
  }
};

module.exports = login;
