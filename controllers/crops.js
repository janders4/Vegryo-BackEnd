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

exports.getCropById = async (req,res,next)=>{
  try{
    const id= req.params.cropid;
    if(!id) throw new Error ('id is blank');
    const crop = await db.collection('crops').doc(id).get();
    if(!crop.exists){
      throw new Error('Crop does not exist')
    }
    res.json({
      id: crop.id,
      data: crop.data()
    })
  }
  catch(error){
    next(error)
  }
}