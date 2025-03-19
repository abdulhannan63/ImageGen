import mongoose from "mongoose";
import 'dotenv/config'
export const connectdb = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("connected to db");
        
    });
    await mongoose.connect(`${process.env.MONGO_URI}ImageGen`);
}

