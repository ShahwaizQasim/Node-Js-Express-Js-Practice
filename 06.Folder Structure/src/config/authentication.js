import jwt from "jsonwebtoken"
import 'dotenv/config'
import UserModel from "../modules/users/models/index.js";

const AuthenticationUsers = async (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECURITY_KEY);
            console.log('decoded', decoded);
            if (decoded) {
                next();
            } else {
                res.status(401).send({ status: 401, message: 'Unauthorized Token', });
            }
        } else {
            res.status(404).send({ status: 404, message: 'User Not Found', });
        }
    } catch (error) {
        res.status(500).send({ status: 500, message: error });
    }
}

const VerifyUser = async (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECURITY_KEY);
            if (decoded) {
                const user = await UserModel.findById(decoded._id).lean();
                if (!user) {
                    res.status(403).send({ status: 403, error: true, message: 'User Not Found' })
                }
                req.user = user;
                next();
            } else {
                res.status(401).send({ status: 401, message: 'Unauthorized Token', });
            }
        } else {
            res.status(404).send({ status: 404, message: 'User Not Found', });
        }
    } catch (error) {
        res.status(500).send({ status: 500, message: 'error in authentication' });
    }
}

const AuthenticationAdmin = async (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            if (!token) {
                res.status(404).send({ status: 404, message: "Token Not Provided" });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECURITY_KEY);
            if (decoded.role == "admin") {
                next();
            } else {
                res.status(400).send({ status: 400, message: 'Admin Only Allow to Access', });
            }
        } else {
            res.status(404).send({ status: 404, message: 'User Not Found', });
        }
    } catch (error) {
        res.status(500).send({ status: 500, message: 'error in authentication' });
    }
}

export { AuthenticationUsers, VerifyUser, AuthenticationAdmin };