const User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);
    console.log({ newUser });

    const user = await newUser.createUser();
    console.log({ user });
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });

    console.log({ newUser });
  } catch (error) {
    console.log({ error });
  }
};
