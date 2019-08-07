const endPoints = require("../endPoints.json");

exports.getEndPoints = async (req, res, next) => {
  try {
    res.status(200).send(endPoints);
  } catch (error) {
    next(error);
  }
};
