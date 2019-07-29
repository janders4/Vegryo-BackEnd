exports.getAllCrops = async (req,res,next) => {
  try{
    const veggies = await db.collection('crops').get();
    const crops=[];
    veggies.collection.forEach(veggie=>{
      crops.push({
        id: veggie.id,
        data: veggie.data()
      });
    });
    res.json(crops);
  }catch(error){
    next(error);
  }
}