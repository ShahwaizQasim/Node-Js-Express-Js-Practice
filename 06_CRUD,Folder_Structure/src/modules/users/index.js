import { Router } from "express";
import AddUser from "./controllers/addUser.js";
import GetUser from "./controllers/getUsers.js";
import UpdateUser from "./controllers/updateUser.js";
import DeleteUser from "./controllers/deleteUser.js";

const userRouter = Router();

userRouter.get('/', GetUser);
userRouter.post('/', AddUser)
userRouter.put('/:id', UpdateUser)
userRouter.delete('/:id', DeleteUser)

export default userRouter;