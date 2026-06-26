import mongoose from "mongoose";
import dotenv from 'dotenv'
 
dotenv.config()
const connectDB =async ()=> {

    try{

        await mongoose.connect(process.env.MONGODB_URI)

       console.log(`DB CONNECTED SUCCESFULLY`)
    }catch(error){
        console.error(`ERROR: ${error.message}`)


    }
}

export default connectDB