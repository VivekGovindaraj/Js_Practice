import express from "express";
import errorMiddleWare from "./middleware/error.js";
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



app.use(errorMiddleWare)


app.listen(3000, () => {
    console.log(`server satrted`)
})