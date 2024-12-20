import 'dotenv/config'
import mongoose from 'mongoose';

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@lms.fdc0y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=LMS`;
mongoose.connect(url);

export {
    mongoose
}