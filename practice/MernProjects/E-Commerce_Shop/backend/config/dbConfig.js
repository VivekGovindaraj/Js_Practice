import mongoose from "mongoose";
import dotenv from "dotenv";


const connectDB =async () => {

    // console.log(process.env.DB_URI)
    // let DB_URI =""
    // mongoose.connect(process.env.DB_URI).then((conn) => {
    //     console.log("DB CONNECTED")
    // })

    try{

        console.log(process.env.DB_URI)
        let DB_URI = ""

        if(process.env.NODE_ENV==="DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI
        if(process.env.NODE_ENV==="PRODUCTION") DB_URI = process.env.DB_URI

        console.log(process.env.NODE_ENV)

        let conn = await mongoose.connect(process.env.DB_URI).then((con) => {
            console.log(`DB CONNECTED ✅ ${con.connection.host}`)
        })
      
        
    }catch(error){
        console.log(`Error Message : ${error.message}`)
        process.exit(1)

    }
}

export default connectDB;