import { Router } from "express";


const userRouter = Router();

userRouter.get('/', (req,res) => {
    res.send({message:"Api Run"});
})

export default userRouter;