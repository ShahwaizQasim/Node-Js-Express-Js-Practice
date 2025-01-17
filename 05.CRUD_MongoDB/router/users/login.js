import UserModal from "../../model/index.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email });
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
                res.status(200).send({ status: 200, user: user, message: 'user login successfully', token: token })
            } else {
                res.status(401).send({ status: 401, message: "Incorrect Password" })
            }
        } else {
            res.status(404).send({ status: 404, message: "User Not Found" })
        }
    } catch (error) {
        console.log('error=>', error);
        res.status(500).send({ status: 500, error: error.message })
    }
}

export default userLogin;