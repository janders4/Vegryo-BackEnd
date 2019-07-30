const express = require("express");
const { getAllCrops } = require("../controllers/crops");
const {
  getUserById,
  getAllUsers,
  addNewUser
} = require("../controllers/users");

const router = express.Router();

router.route("/crops").get(getAllCrops);
router
  .route("/users")
  .get(getAllUsers)
  .post(addNewUser);
router.route("/users/:userid").get(getUserById).patch(editUserById).delete(deleteUserById);

module.exports = { router };
