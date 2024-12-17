import 'dotenv/config'
import mongoose from "mongoose"

const url = process.env.MONGODB_URI;
// console.log('url==>', url);

mongoose.connect(url);

export default mongoose;