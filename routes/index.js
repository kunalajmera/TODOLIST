const express=require("express");
const router=express.Router();
const home_Controller=require("../controllers/home_controller");
console.log("Router Loaded");


router.get('/',home_Controller.home);




module.exports=router;