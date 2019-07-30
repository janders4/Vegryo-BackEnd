const express = require("express");
const { getAllCrops,getCropById } = require("../controllers/crops");
const {
  getUserById,
  getAllUsers,
  addNewUser,
  editUserById,
  deleteUserById
} = require("../controllers/users");

const router = express.Router();

router.route("/crops").get(getAllCrops);
router.route('/crops/:cropid').get(getCropById);

router
  .route("/users")
  .get(getAllUsers)
  .post(addNewUser);
router
  .route("/users/:userid")
  .get(getUserById)
  .patch(editUserById)
  .delete(deleteUserById);

module.exports = { router };
