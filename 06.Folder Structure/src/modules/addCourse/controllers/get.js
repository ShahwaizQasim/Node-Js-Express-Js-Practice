import CourseModel from "../models/courseModel.js";

const getCourse = async (req, res) => {
    try {
        let getCourse = await CourseModel.find();
        res.status(200).send({ status: 200, message: "courses fetch successfully", course: getCourse })
    } catch (error) {
        res.status(400).send({ status: 400, message: error, course: addCourse })
    }
}

export default getCourse;