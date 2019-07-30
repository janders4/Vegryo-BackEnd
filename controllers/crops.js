const admin = require("firebase-admin");

const { serviceAccount } = require("../private");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vegryo-7ee13.firebaseio.com"
});

const db = admin.firestore();

exports.getAllCrops = async (req, res, next) => {
  try {
    const veggies = await db.collection("crops").get();
    const crops = [];
    veggies.forEach(veggie => {
      crops.push({
        id: veggie.id,
        data: veggie.data()
      });
    });
    res.json(crops);
  } catch (error) {
    next(error);
  }
};
