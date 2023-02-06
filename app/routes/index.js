import express from "express";
const routers = express.Router();
import employee from "./employee/employee.js";

import business from "./business/business.js";
import messages from "./messages/messages.js";
import feed from "./feed/feed.js";

routers.use("/employee", employee);
routers.use("/business", business);
routers.use("/messages", messages);
routers.use("/feed", feed);



export default routers;
