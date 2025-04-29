import UserModel from "../../../models/user.model"


const FindUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            _id: req.user._id,
        })
        res.status(200).send({ status: 200, error: false, user })
    } catch (error) {
        res.status(400).send({ status: 400, error: "error in functions" })

    }
}

export default FindUser