import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";
import { ENV } from "../constant/index.js";

const ConnectDB = async () => {
  try {
    const url = `mongodb+srv://${ENV.DB_USERNAME}:${ENV.DB_PASSWORD}@lms.fdc0y.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=LMS`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green.bgWhite("MongoDB is Connected"));
  } catch (error) {
    console.log(chalk.green.bgWhite("MongoDB is not Connected"));
  }
};

export default ConnectDB;
