const usermodel=require('../models/Alumnimodel.js');
const {sendmail} = require('./mailcontroller.js');
const crypto=require('crypto');
const Batchmodel = require('../models/Batchmodel');

const tempUser={};

const registerbatch = async (year) => {
    try{
     await Batchmodel.create({
            year
        });
        console.log("Batch registered");
       
    }catch(err){
        console.log(err);
    }
}

const generateVerificationCode = () => {
    return crypto.randomBytes(3).toString('hex'); // Generate a 6-character hex code
};

const initiatealumniregister = async (req, res,next) => {
    try {
        const { username, usn,year,gmail, password,confirmPassword } = req.body;
        // Find the batch by year
        if (password !== confirmPassword) {
            return res.status(400).send({ msg: "Password and Confirm Password do not match" });
        }
        let batchid = await Batchmodel.findOne({year:year});
        console.log(batchid);
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
        const batch=batchid._id;

        const verificationCode= generateVerificationCode();


        req.session.tempUser= {
            username,
            batch,
            usn,
            gmail,
            password,
            verificationCode,
        };
        
        const subject="Email verification";
        const text = `Dear ${username}, your verification code is:${verificationCode}`;
        
        sendmail(gmail,subject,text);
       return res.status(200).send({ msg: "Verification code sent. Please verify your email."});
        // Create new user
  
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
}

const completealumniregister= async(req,res) => {
    try {
        const { verificationCode } = req.body;
        const tempUser=req.session.tempUser;
 
        if (!tempUser) {
            return res.status(400).json({ msg: "Session expired or user not found. Please register again." });
        }

        if (tempUser.verificationCode !== verificationCode) {
            return res.status(400).send({ msg: "Invalid verification code" });
        }

        const usercreated = new usermodel({
           username:tempUser.username,
            batch:tempUser.batch,
            usn:tempUser.usn,
            gmail:tempUser.gmail,
            password:tempUser.password,
        });
        let subject="Successfully registered";
        let text=`Dear ${tempUser.username}, u are successfully registered as Alumni with alumni planet`
        if(sendmail(tempUser.gmail,subject,text)){
        await usercreated.save();
        req.session.tempUser = null;

        return res.status(200).send({ msg: usercreated });
        }
    } catch (error) {
        console.error(error);
       return res.status(500).send({ msg: "Internal Server Error" });
    }
}

const getUsersByBatchYear = async (req, res) => {
    try {
        const { year } = req.body;

        // Find the batch by year
        const batch = await Batchmodel.findOne({ year });
        if (!batch) {
            return res.status(404).send({ msg: "Batch not found" });
        }

        // Find users by batch ID
        const users = await usermodel.find({ batch: batch._id }).lean();

        res.status(200).send({ users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
}



module.exports={initiatealumniregister,completealumniregister};