import express from "express";
import { postImage } from "~controllers/image/index.js";

const routers = express.Router();

routers.post("/", postImage);

export default routers;
