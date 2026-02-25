import asyncHandler from "./asyncHandler.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken"
import user from "../models/user.js";
export const isAuthenticatedUser = asyncHandler(async(req,resizeBy,next) => {
    const {token} = req.cookies
    console.log(cookies);

    if(!cookies){
        next(new ErrorHandler("Please login first access the resource"), 401)
    }

    const decode = jwt.verify("token", process.env.JWT_SECRET)

    req.user = await User.findById(decode.id)
    next()
})