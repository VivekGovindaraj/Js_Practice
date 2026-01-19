import mongoose, { Mongoose } from "mongoose";

const connectDB = async() => {

    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongo db conencted; ${conn.connection.host}`)
    }catch(error){
        console.error(`ERROR MESSAGE : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;