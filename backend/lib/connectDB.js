import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Mongo is connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;