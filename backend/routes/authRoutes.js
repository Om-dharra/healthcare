const express=require("express");

const router=express.Router();

const Patient=require("../models/Patient");
const passport=require("passport");

router.get("/register",(req,res)=>{
    res.render("auth/signup");

})


router.post("/register",async(req,res)=>{
    const {Patientname,email,password}=req.body;
    const Patient=new Patient({Patientname,email});
    const newPatient=await Patient.register(Patient,password);

    req.flash("success","Patient registered successsfully");

    res.redirect("/login");


})
router.get("/login",(req,res)=>{
    res.render("auth/login");
})
router.post("/login",
    passport.authenticate("local",{
        failureRedirect: "/login",
        failureFlash:true
    }),
    function(req,res){
        req.flash("success",`welcome back ${req.body.Patientname}`);
        res.redirect("/products");
    }
)

router.get("/logout",(req,res)=>{
    req.logOut((err)=>{
        if(err) {return next(err)};
        req.flash("success","Goodbye see u again")
        res.redirect("/login");
    })
})



module.exports=router


