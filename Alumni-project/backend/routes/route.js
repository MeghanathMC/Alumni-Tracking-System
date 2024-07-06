const express=require('express')
const router=express.Router();
const controller=require('../controller/registrationcontroller');

const admincontroller= require('../controller/admincontroller')


router.route("/register").post(controller.register);



router.route("/getbatchdetails").post(admincontroller.getUsersByBatchYear);




module.exports=router;