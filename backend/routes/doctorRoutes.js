const express=require("express");

const router=express.Router();
const axios=require('axios');

const Doctors=require("../models/Doctors");

router.get('/doctors',async(req,res)=>{
    try{
        let alldocs=await Doctors.find({});
        res.status(200).json(alldocs);
    }
    catch(e){
        res.status(400).json({msd:"something went wrong"});
    }

})

module.exports=router;

