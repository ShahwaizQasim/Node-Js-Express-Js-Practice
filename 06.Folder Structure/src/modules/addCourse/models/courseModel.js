import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    duration: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 250,
    },
    image: {
        type: String,
        required: true
    }
})

const CourseModel = mongoose.model("course", CourseSchema);

export default CourseModel