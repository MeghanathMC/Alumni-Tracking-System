const usermodel=require('../models/Usermodel');
const bcrypt=require('bcryptjs');

const nodemailer= require('nodemailer');
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
        const { username, usn,year,gmail,mobilenumber, password } = req.body;
        // Find the batch by year
        let batchid = await Batchmodel.findOne({year:year});
     
        if (!batchid) {
           await registerbatch(year);
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
            mobilenumber,
            password
        });
        sendmail(username,gmail);
        await usercreated.save();
       
        res.status(200).send({ msg: usercreated });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
}

const sendmail=(username,gmail)=> {
    var transport = nodemailer.createTransport({
        service:'gmail',
        port: 465,
        auth: {
          user: "km9100208@gmail.com",
          pass: "hmpt imak ydiu esmj"
        }
      });
    
      const mailOptions={
        from:"km9100208@gmail.com",
        to:`${gmail}`,
        subject:"Successfully registered",
        text:`Dear ${username}, u have registered with alumni website`
      };
    
      transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('Error:',error);
        }else{
            console.log('Email sent:',info.response, gmail);
        }
      });
    
}


module.exports={register};