
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken"
import UserModel from "../../../models/user.model";

const AddUsers = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        let addUser = await UserModel({
            ...req.body,
            password
        });
        addUser = await addUser.save();
        const deletePassword = addUser.toObject();
        delete deletePassword.password;
        let token = jwt.sign({ _id: addUser._id, role: addUser.role, email: addUser.email }, process.env.JWT_SECURITY_KEY);
        res.status(200).send({ status: 200, message: 'user added successfully', user: deletePassword, token });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default AddUsers; 