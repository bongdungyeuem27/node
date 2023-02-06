import express from "express";
import { create, get } from "../../../app/controllers/business/blog.js";

const routers = express.Router();

routers.post("/", create);
routers.get("/", get);

export default routers;
