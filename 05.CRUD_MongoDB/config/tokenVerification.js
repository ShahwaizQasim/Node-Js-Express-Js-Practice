import jwt from "jsonwebtoken"
import 'dotenv/config'

const tokenVerification = (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // yahan humne token ko verify kiya hai
            if (decoded) {
                next();
            } else {
                res.status(403).send({ status: 403, message: "token unauthorized" })
            }

        } else {
            res.status(403).send({ status: 403, message: "token not provided" })
        }
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}

export default tokenVerification;