import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const  app = express()

app.get("/", (req,res) => {

    res.json({
        msg:"helllo"
    })
    
})


app.use(express.json())

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Connected Successfully ${PORT}`)
})

