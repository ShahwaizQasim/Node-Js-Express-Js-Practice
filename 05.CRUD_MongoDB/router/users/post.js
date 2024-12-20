import UserModal from "../../model/index.js";

const postUser = async (req, res) => {
    try {
        let user = await UserModal(req.body);
        user = await user.save()
        console.log("Request", req.body);
        res.status(201).send({ status: 201, message: 'user added successfully ' });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default postUser;