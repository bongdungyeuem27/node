import express from "express";
import { getAppointmentByBusinessId } from "../../controllers/business/appointment.js";

const routers = express.Router();

routers.use("/getlistappointment/:id", getAppointmentByBusinessId);

export default routers;
