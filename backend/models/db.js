import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGO = process.env.MONGO_URL
const MONGODB  = async () =>{
    try{
        mongoose.connect(MONGO)
        console.log("Mongodb connected...")
    }catch(err){
        console.log("Couldn't connect to Mongodb", err)
        process.exit(1)
    }
}

export default MONGODB