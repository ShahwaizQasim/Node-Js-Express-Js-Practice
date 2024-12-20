import express from "express";
import postUser from "./post.js";
import getUser from "./get.js";

const userRoutes = express.Router();

userRoutes.post('/', postUser);
userRoutes.get('/', getUser);

export default userRoutes;
