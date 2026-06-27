import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import ProductRoutes from "./routes/productRoutes.js"
dotenv.config()
connectDB()

const  app = express()
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/product", ProductRoutes)

app.get("/", (req,res) => {

    res.json({
        msg:"helllo"
    })
    
})




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Connected Successfully ${PORT}`)
})

