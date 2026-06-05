import express from "express";
import errorMiddleWare from "./middleware/error.js";
import ErrorHandler from "./utils/errorHandler.js";
const app = express();


// middleware

 // application middleware

//  app.use((req,res,next) => {
//     console.log('request came');
//     next()
//  })


//  // router

//  app.get('/a', (req,res) => {
//     console.log(`Yes you can hit`);
//     res.send("hello")
//  })

 // authorization middle

let isLoggedIn = (req,res,next) => {

    if(!req.headers.authorization) {
        return res.status(401).send("not allowed")
    }
    next()
}

app.get('/dashboard', isLoggedIn , (req,res) => {
    res.send("welcome")
})

app.get("/user", (req,res,next) =>{
    if(!req.query.id){
        return next(new ErrorHandler("User is requried", 400))
    }

    res.send("user found")
})



app.use(errorMiddleWare)


app.listen(4000, () => {
    console.log(`server satrted`)
})