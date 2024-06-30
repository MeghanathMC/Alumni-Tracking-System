const usermodel=require('../models/Usermodel');
const bcrypt=require('bcryptjs');

const register =async (req,res) =>{
    const {username,firstname,lastname,usn,email,mobilenumber,aadharcard,password} = req.body;
   
    const existingUser = await usermodel.findOne({"usn": usn});
    const existingUseremail = await usermodel.findOne({"email": email});
    if(existingUser || existingUseremail){
        console.error({msg:"User exists"});
        res.status(400).send({msg:"User exists"});
    }
    else{
       const usercreated= await usermodel.create({
            username,firstname,lastname,usn,email,mobilenumber,aadharcard,password,
        });
        res.status(200).json({msg:"Registration successful",
            token:await usercreated.generateToken(),
        userId:usercreated._id.toString()});
    }
}

const login= async( req,res) => {
    try{
    const {username,usn,password}=req.body;
   
    const userexist=await usermodel.findOne({"username":username,"usn":usn});
    if(!userexist){
       return res.status(401).json({msg:"Username or usn doesnot exist"});
    }
    
    const isPassword= await userexist.comparePassword(password);
    if(isPassword){
        res.status(200).json({msg:"Login successful",
            token:await userexist.generateToken(),
        userId:userexist._id.toString()});
    }else{
        res.status(400).json({msg:"Password incorrect"});
    }
}catch(error){
 console.error(error);
 res.status(500).json({msg:"Error occured"});
}

}

module.exports={register,login};