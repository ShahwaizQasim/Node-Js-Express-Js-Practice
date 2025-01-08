import { Router } from "express";
import userRoutes from "../modules/users/index.js";
import courseRoutes from "../modules/addCourse/index.js";

const router = Router();

router.use('/users/auth', userRoutes)
router.use('/addCourse', courseRoutes);

export default router;