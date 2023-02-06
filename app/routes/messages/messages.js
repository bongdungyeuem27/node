import express from "express";
import employee from "./employee.js";
import business from "./business.js";

const routers = express.Router();

routers.use("/employee", employee);
routers.use("/business", business);

export default routers;
