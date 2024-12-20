import UserModal from "../../model/index.js";

const postUser = async (req, res) => {
    try {
        let user = await UserModal(req.body);
        user = await user.save()
        let userData = user.toObject(); // yahan string ko object me conver kiya hai
        delete userData.password; // because password ko delete krna tha because password ko hum frontend pr nahi dikhate
        console.log("Request", req.body);
        res.status(201).send({ status: 201, user: userData, message: 'user added successfully ' });
    } catch (error) {
        console.log("Error", error.message);
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default postUser;