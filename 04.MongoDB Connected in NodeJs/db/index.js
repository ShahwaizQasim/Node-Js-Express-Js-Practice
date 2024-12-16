import mongoose from "mongoose"

const url = `mongodb+srv://syedshahwaiz:shahwaiz123@lms.fdc0y.mongodb.net/?retryWrites=true&w=majority&appName=LMS`
mongoose.connect(url);

export default mongoose;