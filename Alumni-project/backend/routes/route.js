const express=require('express')
const router=express.Router();
const controller=require('../controller/registrationcontroller');
const logincontroller = require("../controller/logincontroller");
const admincontroller= require('../controller/admincontroller')


router.route("/register").post(controller.register);

router.route("/userdetails").get(logincontroller.protect,homecontroller.home);


router.route("/getbatchdetails").post(admincontroller.getUsersByBatchYear);




module.exports=router;