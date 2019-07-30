const admin = require("firebase-admin");

const { serviceAccount } = require("../private");
const db = admin.firestore();

exports.getAllUsers = async (req, res, next) => {
  try {
    const userNames = await db.collection("Users").get();
    const users = [];
    userNames.forEach(user => {
      users.push({
        id: user.id,
        data: user.data()
      });
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const id = req.params.userid;
    if (!id) throw new Error("id is blank");
    const user = await db
      .collection("Users")
      .doc(id)
      .get();
    if (!user.exists) {
      throw new Error("User does not exists");
    }
    res.json({
      id: user.id,
      data: user.data()
    });
  } catch (error) {
    next(error);
  }
};
