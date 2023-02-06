import express from "express";
import {
  send,
  getListMessagesByTime,
  getPerson,
  getRecentlyPage
} from "../../controllers/messages/employee.js";

const routers = express.Router();

routers.post("/send", send);
routers.get("/getlistmessagesbytime", getListMessagesByTime);
routers.get("/getperson", getPerson);
routers.get("/getrecentlypage", getRecentlyPage )

export default routers;
