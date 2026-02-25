import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js"
import sendToken from "../utils/sendToken.js";


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