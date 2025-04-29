import mongoose from "mongoose";

const ConnectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};

export default ConnectDB;
