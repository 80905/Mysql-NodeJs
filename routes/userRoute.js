const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  getUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:Id").get(getUser);

module.exports = router;
