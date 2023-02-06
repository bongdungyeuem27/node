import express from "express";
import { search } from "../../controllers/feed/search.js";

const routers = express.Router();

routers.use("/search", search);
export default routers;
