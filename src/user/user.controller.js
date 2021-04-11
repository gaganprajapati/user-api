const User = require("./user.model");
const UserService = require("./user.service");

module.exports.addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User(email, password);
    if (await user.doesUserExist()) {
      return res.status(400).json("User already exists");
    }
    const userData = await user.add(user);
    res.json(userData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = new User(email);
    if (!await user.doesUserExist(email)) {
      return res.status(400).json("User not found");
    }
    const userData = await user.delete(email);
    res.json(userData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
