import 'dotenv/config' //yeh import karna necessary hai because ye hi .env ki file load krega 
import mongoose from "mongoose"

const url = process.env.MONGODB_URI;
// console.log('url==>', url);

mongoose.connect(url);

export default mongoose;