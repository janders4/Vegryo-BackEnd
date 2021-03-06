const admin = require("firebase-admin");
const db = admin.firestore();

const { serviceAccount } = require("../private");

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
      throw new Error("User does not exist");
    }
    res.json({
      id: user.id,
      data: user.data()
    });
  } catch (error) {
    next(error);
  }
};

exports.addNewUser = async (req, res, next) => {
  try {
    const newUser = req.body.text;
    const userID = req.body.id;
    if (!newUser || !userID) throw new Error("newUser is blank");
    const user = await db
      .collection("Users")
      .doc(userID)
      .set(newUser);
    res.json({ userID, newUser });
  } catch (error) {
    next(error);
  }
};

exports.editUserById = async (req, res, next) => {
  try {
    const id = req.params.userid;
    const data = req.body.text;
    if (!id) throw new Error("id is blank");
    if (!data) throw new Error("User is blank");
    const user = await db
      .collection("Users")
      .doc(id)
      .update(data, { merge: true });
    res.json({
      id,
      data
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.userid;
    if (!id) throw new Error("id is blank");
    await db
      .collection("Users")
      .doc(id)
      .delete();
    res.json({
      id
    });
  } catch (error) {
    next(error);
  }
};
