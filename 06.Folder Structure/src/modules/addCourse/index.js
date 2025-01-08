import { Router } from "express";
import AddCourse from "./controllers/post.js";
import getCourse from "./controllers/get.js";
import { AuthenticationAdmin, AuthenticationUsers } from "../../config/authentication.js";

const courseRoutes = Router();

courseRoutes.post('/', AuthenticationAdmin, AddCourse);
courseRoutes.get('/', AuthenticationUsers, getCourse);

export default courseRoutes;