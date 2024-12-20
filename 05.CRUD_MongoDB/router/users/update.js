import UserModal from "../../model/index.js";

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userUpdate = await UserModal.findByIdAndUpdate(id, req.body);
        res.status(200).send({ status: 200, message: 'user updated successfully' })

    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}

export default updateUser;