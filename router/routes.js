const express = require("express");
const { getAllCrops } = require("../controllers/crops");
const { getUserById, getAllUsers } = require("../controllers/users");

const router = express.Router();

router.route("/crops").get(getAllCrops);
router.route("/users").get(getAllUsers);
router.route("/users/:userid").get(getUserById);

module.exports = { router };
