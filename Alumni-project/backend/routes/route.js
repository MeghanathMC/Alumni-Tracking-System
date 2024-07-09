const express=require('express')
const router=express.Router();
const controller=require('../controller/registrationcontroller');
const passwordcontroller= require("../controller/passwordcontroller");
const logincontroller = require("../controller/logincontroller");
const homecontroller= require("../controller/homecontroller");
const alumniregistrationcontroller=require("../controller/alumniregistrationcontroller");

router.route("/studentregister/initiate").post(controller.initiatestudentregister);
router.route("/studentregister/complete").post(controller.completestudentregister);


router.route("/alumniregister/initiate").post(alumniregistrationcontroller.initiatealumniregister);
router.route("/alumniregister/complete").post(alumniregistrationcontroller.completealumniregister);


router.route("/forgotPassword").post(passwordcontroller.forgotPassword);
router.route("/resetPassword/:role/:token").patch(passwordcontroller.resetPassword);


router.route("/updatePassword").patch(logincontroller.protect,passwordcontroller.updatePassword);
router.route("/userdetails").get(logincontroller.protect,homecontroller.home);


router.route("/getbatchdetails").post(controller.getUsersByBatchYear);


router.route("/login").post(logincontroller.login);


module.exports=router;