const usermodel=require('../models/Usermodel');

const {sendmail}= require('./mailcontroller.js');

const Batchmodel = require('../models/Batchmodel');



const registerbatch = async (req,res,year) => {
    try{
     
        const batch= await Batchmodel.create({
            year
        });
        console.log("Batch registered");
        res.status(200).json({msg:"Batch registered"});
    }catch(err){
        console.log(err);
    }
}
const register = async (req, res) => {
    try {
        const { username, usn,year,gmail, password,confirmPassword } = req.body;
        // Find the batch by year
        if (password !== confirmPassword) {
            return res.status(400).send({ msg: "Password and Confirm Password do not match" });
        }
        let batchid = await Batchmodel.findOne({year:year});
     
        if (!batchid) {
           await registerbatch(year);
           batchid = await Batchmodel.findOne({year:year});
        }
        // Check if user already exists
        const existingUser = await usermodel.findOne({ usn: usn,gmail:gmail });
        if (existingUser) {
            console.error({ msg: "User exists with usn or email" });
            return res.status(400).send({ msg: "User exists" });
        }

        batchid = await Batchmodel.findOne({year:year});
        const batch=batchid._id;
        // Create new user
        const usercreated = new usermodel({
            username,
            batch,
            usn,
            gmail,
            password
        });
        await usercreated.save();
        let subject="Successfully registered";
        let text=`Dear ${username}, u are registered with alumni website`
        sendmail(username,gmail,subject,text);
        res.status(200).send({ msg: usercreated });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
}




module.exports={register};