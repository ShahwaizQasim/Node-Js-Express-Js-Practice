import { Router } from "express";
import getUsers from "./controllers/get.js";
import AddUsers from "./controllers/post.js";
import LoginUsers from "./controllers/login.js";
import deleteUser from "./controllers/deleteUser.js";
import updateUser from "./controllers/updateUser.js";
import FindUser from "./controllers/findUser.js";
import { AuthenticationUsers, VerifyUser } from "../../middlieware/authentication.js";

const userRoutes = Router()

userRoutes.post('/login', LoginUsers)
userRoutes.post('/', AddUsers)
userRoutes.get('/', AuthenticationUsers, getUsers)
userRoutes.get('/UserInfo', VerifyUser, FindUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.put('/:id', updateUser)

export default userRoutes;