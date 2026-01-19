import express from 'express';
import dotenv from 'dotenv';
import  cors from 'cors';
import connectDB from './config/db.js';
import thoughtRoutes from './routes/thoughtRoutes.js '


dotenv.config();  //first we have to config the dotenv


// CONNECT to MONGO DB

connectDB(); // call the db function



const app = express();

// Middleware

app.use(cors());      // .use() is a express method
app.use(express.json());


  
//Routes

app.use("/api/thoughts", thoughtRoutes);


// Test route


app.get('/',  (req,res) => {
    res.json({
        message:"BRAIN-BANK",
        status:'Sucess'

    })
})


// server port 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
    console.log(`server is started ${PORT}`)
})



