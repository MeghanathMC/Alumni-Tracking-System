
const alumnimodel=require('../models/Alumnimodel');
const studentmodel=require('../models/Studentmodel');

const login= async( req,res) => {
    try{
    const {role,gmail,password}=req.body;
    
    let userexist;
    if(role==="alumni"){
    userexist=await alumnimodel.findOne({"gmail":gmail});
    }else{
     userexist=   await studentmodel.findOne({"gmail":gmail});
    }
    console.log(userexist);
    if(!userexist){
       return res.status(401).json({msg:"Email doesnot exist"});
    }
    
    const isPassword= await userexist.comparePassword(password);
    if(isPassword){
        const generatedToken= await userexist.generateToken(role);
        console.log(generatedToken);
       
        req.session.user={
            id:userexist._id.toString(),
            role:role,
            token:generatedToken
        };

        res.status(200).json({msg:"Login successful",
            token:generatedToken,
        id:userexist._id.toString()});
    }else{
        res.status(400).json({msg:"Password incorrect"});
    }
}catch(error){
 console.error(error);
 res.status(500).json({msg:"Error occured"});
}

}

const jwt = require('jsonwebtoken');


const protect = async (req, res, next) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ msg: "No session found, authorization denied" });
          }
      
          const { token, role } = req.session.user;
      

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Replace 'your_jwt_secret_key' with your actual secret
        console.log(decoded);
        let requser;
        if(role==='alumni'){
          requser= await alumnimodel.findById(decoded.id).select('-password');
        }else{
            requser=await studentmodel.findById(decoded.id).select('-password');
        }
        if(!requser){
            return res.json({msg:"User with the token doesnot exists"});
        }
        const isPasswordChanged=await requser.isPasswordChanged(decoded.iat);
        if(isPasswordChanged){
            return res.json({msg:"Please login again"});
        }
        req.user=requser;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ msg: "Token is not valid" });
    }
};

module.exports = { login, protect };
