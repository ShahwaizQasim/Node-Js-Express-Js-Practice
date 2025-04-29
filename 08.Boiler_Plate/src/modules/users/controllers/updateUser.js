import UserModel from "../../../models/user.model";


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await UserModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({ status: 200, message: 'user updated successfully', user: updateUser });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default updateUser; 