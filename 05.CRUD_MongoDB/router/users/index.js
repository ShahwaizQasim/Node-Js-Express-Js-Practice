import express from "express";
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./update.js";
import userLogin from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";


const userRoutes = express.Router();

userRoutes.post('/login', userLogin);
userRoutes.post('/', postUser);
userRoutes.get('/', tokenVerification, getUser);
userRoutes.delete('/:id', deleteUser);
userRoutes.put('/:id', updateUser);

export default userRoutes;
