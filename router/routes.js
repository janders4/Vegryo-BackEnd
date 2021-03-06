const express = require("express");
const { getEndPoints } = require("../controllers/endPoints");
const { getAllCrops, getCropById } = require("../controllers/crops");
const {
  getUserById,
  getAllUsers,
  addNewUser,
  editUserById,
  deleteUserById
} = require("../controllers/users");
const { getImageById } = require("../controllers/images");

const router = express.Router();

router.route("/").get(getEndPoints);

router.route("/crops").get(getAllCrops);
router.route("/crops/:cropid").get(getCropById);

router
  .route("/users")
  .get(getAllUsers)
  .post(addNewUser);

router
  .route("/users/:userid")
  .get(getUserById)
  .patch(editUserById)
  .delete(deleteUserById);

router.route("/vegetableimages/:vegetable").get(getImageById);

module.exports = { router };
