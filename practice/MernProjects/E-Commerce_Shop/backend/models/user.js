import mongoose, { model } from "mongoose";

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

export default mongoose.model("User",userSchema);