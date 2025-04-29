import CourseModel from "../../../models/user.addCourse.js";


const CourseDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const CourseDelete = await CourseModel.findByIdAndDelete(id)
        res.status(200).send({ status: 200, message: "course deleted successfully" });
    } catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}

export default CourseDelete;