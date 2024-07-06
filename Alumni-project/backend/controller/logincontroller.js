const usermodel=require('../models/Usermodel');


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

module.exports={login};