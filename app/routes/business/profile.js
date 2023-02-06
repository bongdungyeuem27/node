import express from "express";
import uploadImageMiddleware from "../../middleware/uploadImageMiddleware.js";
import {
  deleteAvatar,
  getAvatar,
  postAvatar
} from "../../../app/controllers/business/profile.js";

const routers = express.Router();

routers.get("/avatar/:id", getAvatar);
routers.delete("/avatar/:id", deleteAvatar);
routers.post("/avatar/:id", uploadImageMiddleware.single("image"), postAvatar);

export default routers;
