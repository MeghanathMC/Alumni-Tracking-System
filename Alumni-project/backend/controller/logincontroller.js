const usermodel=require('../models/Usermodel');


const login= async( req,res) => {
    try{
    const {gmail,password}=req.body;
   
    const userexist=await usermodel.findOne({"gmail":gmail});
    console.log(userexist);
    if(!userexist){
       return res.status(401).json({msg:"Email doesnot exist"});
    }
    
    const isPassword= await userexist.comparePassword(password);
    if(isPassword){
        const generatedToken= await userexist.generateToken();
        console.log(generatedToken);
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
        let token;
        const authHeader = req.headers.authorization;
        
        if (authHeader && authHeader.startsWith('bearer')) {
            token = authHeader.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ msg: "No token provided, authorization denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Replace 'your_jwt_secret_key' with your actual secret
        console.log(decoded);
        const requser = await usermodel.findById(decoded.id).select('-password');
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
