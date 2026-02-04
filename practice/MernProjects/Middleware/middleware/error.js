const errorMiddleWare = (err,req,res,next) => {

    let statusCode = err.statusCode || 500
    let message = err.message || "Internal server error"

    res.status(err.statusCode).json({
        message
    })

}

export default errorMiddleWare