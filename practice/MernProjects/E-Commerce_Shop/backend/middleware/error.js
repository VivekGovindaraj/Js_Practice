import ErrorHandler from "../utils/errorHandler.js"

//error middleware
export default (err,req,res,next) => {
    let error = {
        statusCode :err.statusCode || 500,
        message : err.message || "Internal Error"
    }

    // Hanlding invalid moongoose error
    //id error
    if(err.name == "CastError"){

        let message = `Resource not found, Invalid ${err.path}`
       error = new ErrorHandler(message, 404)
    }

    // validation error
    if(err.name == "ValidationError") {
        let message = Object.values(err.errors).map((val) => val.message)
        error = new ErrorHandler(message,404)
    }
 
    if(process.env.NODE_ENV ==="DEVELOPMENT"){
        res.status(error.statusCode).json({
         message:error.message,
         error:err,
         stack:err?.stack
        })
    }

    if(process.env.NODE_ENV==="PRODUCTION"){
        res.status(error.statusCode).json({
         message:error.message
         
        })
    }
    
}