import express from "express"
import userRoutes from "../modules/users/index.js";

const router = express.Router();

router.use('/user', userRoutes)

export default router;