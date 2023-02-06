import express from "express";
import profile from "../../controllers/employee/profile.js";
import { prediction } from "../../controllers/employee/prediction.js";
import customcv from "./customcv.js";
import joblevel from "./joblevel.js";
import interview from "./interview.js"
const routers = express.Router();

routers.use("/prediction/:id", prediction);
routers.use("/profile", profile);
routers.use("/customcv", customcv);
routers.use("/joblevel", joblevel);
routers.use("/interview", interview);
export default routers;
