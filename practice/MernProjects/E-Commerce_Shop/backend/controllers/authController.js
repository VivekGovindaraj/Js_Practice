import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.js"

export const registerUser = asyncHandler( async (req,res,next) => {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password
    })

    res.status(201).json({
        success:true 
    })
})