import UserModal from "../../model/index.js";



const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // user se id get karne ka tariqa
        const userDelete = await UserModal.findByIdAndDelete(id) // ye mongoose ka function hai findByIdAndDelete
        res.status(200).send({ status: 200, UserDelete: userDelete, message: 'user deleted successfully' })
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}
export default deleteUser;