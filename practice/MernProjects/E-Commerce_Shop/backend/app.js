import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config({
    path:"backend/config/.env"
})

// connect DB

connectDB();

const app = express();

// middle ware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
    limit:"10mb"
}))


app.get('/', (req,res) => {
    res.json({
        message:"E-Commerece_Shop"
    })
})

app.use('/api/v1/', productRoutes)


//starting server 


const PORT =process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Server started successfully ${PORT}`)
})

// console.log("CWD:", process.cwd());
