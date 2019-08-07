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
      id: crop.id,
      data: crop.data()
    });
  } catch (error) {
    next(error);
  }
};
