
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.js";
import sendEmail  from "../utils/sendEmail.js"
import { getResetPasswordTemplate } from "../utils/emailTemplate.js";
import ErrorHandler from "../utils/errorHandler.js"
import sendToken from "../utils/sendToken.js";
import crypto from "crypto";

export const registerUser = asyncHandler( async (req,res,next) => {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password
    })

    // const token = user.getJwtToken()
    // res.status(201).json({
    //     success:true ,
    //     user,
    //     token
    // })
    sendToken(user,201,res)

})

// user login
export const loginUser =  asyncHandler(async (req,res,next) => {

    const {email,password} = req.body;

    if(!email || !password){
      return  next(new ErrorHandler("Please enter email and password", 400))
    }

    //checking user in db
    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Invalid User and user not found or check email and password"), 401)
    }

    //commparing password

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
       return next(new ErrorHandler ("Invalid email or password,check password"), 401)
    }

    // const token = user.getJwtToken()

    // res.status(201).json({
    //     token
    // })

    sendToken(user,200,res)

})

// user logout
export const logOut = asyncHandler( async(req,res,next) => {

      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: "Logged Out"
    });
})

// forget pssword

export const forgetPassword = asyncHandler( async (req,res,next) => {

    //find user

    const user =await User.findOne({email:req.body.email})
    
   if(!user){
   return next(new ErrorHandler("User not found", 404))
   }

   // get reset token

   const resetToken = user.getResetPasswordToken();
   await user.save()

  //create passwoord reset URL

  const resetURL = `${process.env.FRONTEND_URL}/api/v1/password/reset/${resetToken}`;

  const message = getResetPasswordTemplate(user?.name, resetURL)

  try{

    await sendEmail({
        email:user.email,
        subject:"E_Commerce_shop Password Recovery",
        message
    })

    res.status(200).json({
        message:`Email sent to ${user?.email}`
    })


  }catch(error){

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    return next( new ErrorHandler(error?.message,500))
  }

  

  
})


// Reset password

export const resetPassword = asyncHandler( async(req,res,next) => {

    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
    })

       
   if(!user){
   return next(new ErrorHandler("User not found", 404))
   }

   if(req.body.password !== req.body.confirmPassword){
     return next(new ErrorHandler("Password dosen't Match", 404)) 
   }
    //set new password
   user.password = req.body.password;

   user.resetPasswordToken = undefined;
   user.resetPasswordExpire = undefined;

   await user.save();

   sendToken(user,200, res)
})

// get current user profile api/v1/me

export const getUserProfile = asyncHandler( async(req,res,next) => {

    const user = await User.findById(req?.user?._id);

    res.status(200).json({
        user    
    })
})
