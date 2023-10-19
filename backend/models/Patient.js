const mongoose=require("mongoose");
const passportLocalMongoose=require('passport-local-mongoose')

const patientSchema=new mongoose.Schema({
    // username:String, --->This is automatically added by passport-local-manager
    // password:String, 
    email:String,
    conditions: [
        {
            name:String, //name of mental condition if any
            age:Number, // age of the patient
            health_status:String, //what type of mental condtion if patient know it already otherwise added later
            id: mongoose.Schema.Types.ObjectId

        }
    ]
})

patientSchema.plugin(passportLocalMongoose);
const Patient=mongoose.model("Patient",patientSchema);
module.exports=Patient