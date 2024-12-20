import UserModal from "../../model/index.js";


const getUser = async (req, res) => {
    try {
        let user = await UserModal.find()
        res.status(200).send({ status: 200, user: user, message: 'user fetch successfully' })

    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}

export default getUser;