const mongoose=require("mongoose")

const treatmentSchema=new mongoose.Schema({
    name:String, //name of treatment or exercise
    freq: Number, //time limit of the exercise/treatment or frequency of the exercise/treatment 
    img:String, //img of exercise
    desc:String //what type of exercise needed
})

const Treatment=mongoose.model("Treatment",treatmentSchema);

module.exports=Treatment
