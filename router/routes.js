const express = require("express");
const { getAllCrops } = require("../controllers/crops");

const router = express.Router();

router.route("/crops").get(getAllCrops);

module.exports = { router };
