import CourseModel from "../models/courseModel.js";

const AddCourse = async (req, res) => {
    try {
        let addCourse = await CourseModel(req.body);
        addCourse = await addCourse.save();
        res.status(200).send({ status: 200, message: "course added successfully", course: addCourse })
    } catch (error) {
        console.log("error in addCourse Controllers", error);
        res.status(400).send({ status: 400, message: `${error} in addCourse Controllers` })
    }
}

export default AddCourse;