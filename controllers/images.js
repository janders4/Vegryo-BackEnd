const admin = require("firebase-admin");
const db = admin.firestore();

exports.getImageById = async (req, res, next) => {
  try {
    const id = req.params.vegetable;
    if (!id) throw new Error("vegetable is blank");
    const vegImage = await db
      .collection("VegImages")
      .doc(id)
      .get();
    if (!vegImage.exists) {
      throw new Error("Vegetable does not exist");
    }
    res.json({
      id: vegImage.id,
      data: vegImage.data()
    });
  } catch (error) {
    next(error);
  }
};
