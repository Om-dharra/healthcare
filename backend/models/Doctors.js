const mongoose=require("mongoose");

const doctorSchema=new mongoose.Schema({
    doc_id:Number,
    name:String,
    specialize:String,
    doc_img:String
})


const doctor=mongoose.model("doctor",doctorSchema);
module.exports=doctor