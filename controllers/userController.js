const User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);

    const user = await newUser.createUser();

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log({ error });
  }
};
exports.getUsers = async (req, res, next) => {
  try {
    const [users, _] = await User.getUsers();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const [user, _] = await User.getUserById(req.params.Id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
