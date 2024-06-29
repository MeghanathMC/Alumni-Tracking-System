const express=require('express')
const router=express.Router();
const controller=require('../controller/authcontroller');


router.route("/register").post(controller.register);
router.route("/login").get(controller.login);


module.exports=router;