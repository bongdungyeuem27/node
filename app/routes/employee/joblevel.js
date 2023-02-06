import express from "express";
const routers = express.Router();
import {calculate} from "../../controllers/employee/joblevel.js"

routers.get("/calculate/:id", calculate);
export default routers;
