import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/ecomnewapp`);
        console.log(`Connected to MongoDB ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in mongodb connection ${error}`.bgRed.white);
    }
}

export default connectDB;