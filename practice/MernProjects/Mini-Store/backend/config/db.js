import mongoose from "mongoose";

export const connectDB = async (uri) => {

    try{

        if(!uri) throw new Error ('Missing MongoDB Uri')
            await mongoose.connect(uri, {
                dbName:"Mini-Store"
            })

            console.log("db connected")
    }catch(error){
        console.error("Mongo error", error.message);
        process.exit(1)
    }
}