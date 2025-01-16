import { Router } from "express";
import AddUser from "./controllers/addUser.js";


const userRouter = Router();

userRouter.get('/', (req,res) => {
    res.send({message:"Api Run"});
})

userRouter.post('/', AddUser)

export default userRouter;