const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")
const jwt= require("jsonwebtoken")
const validator=require("validator");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    batch:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'batch'
    },
    usn:{
        type:String,
        required:true,
        unique:true,
    },
    gmail:{
        type:String,
        required:true,
        unique:true,
    },
    
    password:{
        type:String,
        required:[true, 'Please enter a password.'],
        minlength:8
    },
    passwordChangedAt:Date,
});

userSchema.pre("save",async function(next){
    const user = this;
    try{
     const saltRound=await bcrypt.genSalt(10);
     const hashpassword= await bcrypt.hash(user.password, saltRound);
     user.password=hashpassword;
     user.confirmPassword=undefined;
     console.log({msg:user});
     next();
    }catch(error){
        console.error("Falied");
        next(error);
    }
    
});

userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken= async function(){
    try{
    return jwt.sign({
      userId:this._id.toString(),

    },
    process.env.JWT_SECRET_KEY,
    {expiresIn:"1d",}
);
}catch(error){
    console.error(error);
}
}



userSchema.methods.isPasswordChanged= async function(JWTTimestamp){
    if(this.passwordChangedAt){
        const pswdChangedTimestamp=parseInt(this.passwordChangedAt.getTime()/1000,10);
        console.log(pswdChangedTimestamp, JWTTimestamp);

        return JWTTimestamp<pswdChangedTimestamp;
    }
    return false;
}

const usermodel=mongoose.model("usermodel",userSchema);

module.exports=usermodel;