const admin = require('firebase-admin');
const { Router }= require('express');
const serviceAccount = require ('./serviceAccountKey.json');
const {getAllCrops} = require('/home/natasafi/Desktop/Vegryo-BackEnd/controllers/crops.js')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vegryo-7ee13.firebaseio.com'
});

const db=admin.firestore();
const router= Router();

router.get('/crops', getAllCrops)
});