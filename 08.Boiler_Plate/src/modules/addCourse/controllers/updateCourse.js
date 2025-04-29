import CourseModel from "../../../models/user.addCourse";

const UpdateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const UpdateCourse = await CourseModel.findByIdAndUpdate(id, req.body)
        if (!UpdateCourse) {
            res.status(404).send({ status: 404, message: "course not found" });
        }
        res.status(200).send({ status: 200, message: "course updated successfully" });
    } catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}

export default UpdateCourse;