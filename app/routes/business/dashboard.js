import express from "express";
import { seen, notseen } from "../../../app/controllers/business/dashboard.js";

const routers = express.Router();

routers.get("/apply/seen/:postid", seen);
routers.get("/apply/notseen/:postid", notseen);
routers.get("/apply/:postid", notseen);

export default routers;
