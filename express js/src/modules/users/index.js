import express from "express"
import { AddUser } from "./controllers/addUser.js";

const userRoutes = express.Router();
userRoutes.post('/register', AddUser)

export default userRoutes