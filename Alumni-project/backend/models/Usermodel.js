const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    usn:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobilenumber:{
        type:String,
        required:true,
    },
    aadharcard:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre("save",async function(next){
    const user = this;
    try{
     const saltRound=await bcrypt.genSalt(10);
     const hashpassword= await bcrypt.hash(user.password, saltRound);
     user.password=hashpassword;
     console.log({msg:user});
     next();
    }catch(error){
        console.error("Falied");
        next(error);
    }
    
});

const usermodel=mongoose.model("usermodel",userSchema);

module.exports=usermodel;