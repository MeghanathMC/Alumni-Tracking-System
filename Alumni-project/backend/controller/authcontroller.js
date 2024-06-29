const usermodel=require('../models/Usermodel');

const login =async (req,res) =>{
    const {username,firstname,lastname,usn,email,mobilenumber,aadharcard,password} = req.body;
   
    const existingUser = await usermodel.findOne({usn: usn});
    if(existingUser){
        console.error({msg:"User exists"});
        res.status(400).send({msg:"User exists"});
    }else{
       const usercreated= await usermodel.create({
            username,firstname,lastname,usn,email,mobilenumber,aadharcard,password,
        });
        res.status(200).send({msg:usercreated});
    }
}

module.exports={login};