const express = require('express');
const cors= require('cors');
const methodOverride= require('method-override');
const {router}= require ('/home/natasafi/Desktop/Vegryo-BackEnd/router/routes.js')

const app=express();

app.use(cors({origin:true}));
app.use(express.json());
app.use('/api', router );
app.use(methodOverride);

app.use((err,req,res,next)=>{
  res.status(400).json({
    error:err.message
  });
});

module.exports = {app};