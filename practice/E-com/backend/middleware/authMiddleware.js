import jwt from 'jsonwebtoken'
import User from '../models/User.js'


// protect

export const protect = async(req, res, next) => {

    console.log("middle ware stared")
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

        token = req.headers.authorization.split(" ")[1];
      

        const decode = jwt.verify(token, process.env.JWT_SECRET)

       

        req.user = await User.findById(decode.id).select("-password")
        next()
         
    }
}