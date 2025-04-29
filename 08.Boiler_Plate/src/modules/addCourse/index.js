import { Router } from "express";
import AddCourse from "./controllers/post.js";
import getCourse from "./controllers/get.js";
import { AuthenticationAdmin, AuthenticationUsers } from "../../middlieware/authentication.js";
import CourseDelete from "./controllers/delete.js";
import UpdateCourse from "./controllers/updateCourse.js";

const courseRoutes = Router();

courseRoutes.post('/', AuthenticationAdmin, AddCourse);
courseRoutes.get('/', AuthenticationUsers, getCourse);
courseRoutes.delete('/:id', AuthenticationAdmin, CourseDelete);
courseRoutes.put('/:id', AuthenticationAdmin, UpdateCourse);

export default courseRoutes;