const User= require('../models/Usermodel');
const jwt= require('jsonwebtoken');
const nodemailer = require('nodemailer');

const forgotPassword= async(req,res) => {
    const {gmail}=req.body;
    
    User.findOne({gmail:gmail})
    .then(user => {
        if(!user){
            return res.send({msg:"User not found with gmail"});
        }
        const token = jwt.sign({id: user._id},"jwt_secret_key",{expiresIn: 10*60*1000})
        var transport = nodemailer.createTransport({
            service:'gmail',
            port: 465,
            auth: {
              user: "alumniconnectweb@gmail.com",
              pass: "kzjc fpga yfeh sdww"
            }
          });
        
          const mailOptions={
            from:"km9100208@gmail.com",
            to:`${gmail}`,
            subject:"Reset your password",
            text:`http://localhost:5000/reset-password/${user._id}/${token}`
          };
        
          transport.sendMail(mailOptions,function(error,info){
            if(error){
                console.log('Error:',error);
            }else{
                return res.send({Status:"Success"})
            }
          });
        
    })

}

const resetPassword = async(req,res) => {
    const {password} = req.body;
    
}

module.exports={forgotPassword};