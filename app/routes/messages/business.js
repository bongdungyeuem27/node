import express from "express";
import {
  getRecentlyProfile,
  getListMessagesByTime,
  send
} from "../../controllers/messages/business.js";

const routers = express.Router();

routers.get("/getrecentlyprofile", getRecentlyProfile);
routers.get("/getlistmessagesbytime", getListMessagesByTime);
routers.post("/send", send);

export default routers;
