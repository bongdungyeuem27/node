import express from "express";
import profile from "./profile.js";
import blog from "./blog.js";
import post from "./post.js";
import appointment from "./appointment.js";
import dashboard from "./dashboard.js";
const routers = express.Router();

routers.use("/profile", profile);
routers.use("/blog", blog);
routers.use("/post", post);
routers.use("/appointment", appointment);
routers.use("/dashboard", dashboard);
export default routers;
