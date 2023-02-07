import express from "express";
import employee from "./employee/index.js";
import image from "./image/index.js";

const routers = express.Router();

routers.use("/employee", employee);
routers.use("/image", image);

export default routers;
