import UserModal from "../../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);  // user_password ko hash_password me convert kiya hai
        let user = await UserModal({
            ...req.body,
            password
        });
        user = await user.save()
        let userData = user.toObject(); // yahan string ko object me conver kiya hai
        delete userData.password; // because password ko delete krna tha because password ko hum frontend pr nahi dikhate
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET); // yahan token generate kiya hai
        res.status(201).send({ status: 201, user: userData, message: 'user added successfully ', token: token });
    } catch (error) {
        console.log("Error", error.message);
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default postUser;