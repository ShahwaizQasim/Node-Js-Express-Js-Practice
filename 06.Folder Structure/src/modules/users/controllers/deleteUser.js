import mongoose from "mongoose";
import UserModel from "../models/index.js";

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const RemoveIdGap = id.trim();
        if (!mongoose.Types.ObjectId.isValid(RemoveIdGap)) {
            res.status(400).send({ status: 400, message: "Invalid User Id" });
        }
        console.log('id', id);
        const deleteUser = await UserModel.findByIdAndDelete(RemoveIdGap);
        res.status(200).send({ status: 200, message: 'user deleted successfully', user: deleteUser });
    } catch (error) {
        console.log(error);

        res.status(400).send({ status: 400, message: error.message });
    }
}

export default deleteUser; 