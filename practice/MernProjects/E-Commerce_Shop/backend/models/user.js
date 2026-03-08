import mongoose, { model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter your Name"],
        maxLength:[50, "Your Name should not exceed more than 50 chars"]
    },
     email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please enter your Password"],
    },
    avatar:{
        public_id:String,
        url:String,
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
},{timestamps:true})

// encrypting password before saving the user

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10)
})

// return token

userSchema.methods.getJwtToken = function(){
   return jwt.sign( {id:this._id}, process.env.JWT_SECRET, {
   expiresIn:process.env.JWT_EXPIRES_TIME
}
)
}

//compare password

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

//Generate reset passowrd token

userSchema.methods.getResetPasswordToken = function(){
    

    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // hash and set  to compared

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 30* 60 *1000;

    return resetToken
}

export default mongoose.model("User",userSchema);