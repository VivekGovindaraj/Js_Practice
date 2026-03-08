import asyncHandler from "./asyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken"
import User from "../models/user.js";


export const isAuthenticatedUser = asyncHandler(async(req,res,next) => {
    const {token} = req.cookies
    console.log(token);

    if(!token){
        next(new ErrorHandler("Please login first to access this resource",401))
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decode.id)
    next()
})


//authorize role
export const authorizeRole = (...roles) => {
    
    return (req,res,next) => {
        if(!roles.includes(req.user.role) ){
            return next(new ErrorHandler("Role not authozied to acces the resources", 403 ));
        }
         next();
    }
   
}