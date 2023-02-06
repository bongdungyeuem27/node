import express from "express";
import middleware from "../../middleware/uploadVideoMiddleware.js";
import {addVideo} from "../../controllers/employee/interview.js"

const routers = express.Router();


routers.post("/upload", middleware.single('video'), addVideo);
export default routers;
