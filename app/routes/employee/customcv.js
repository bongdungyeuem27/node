import express from "express";
import {
  uploadImage,
  publishSample,
  getTokenId,
  getNFTMetadata,
  getNFTImage,
} from "../../controllers/employee/customcv.js";
import uploadImageMiddleware from "../../middleware/uploadImageMiddleware.js";

const routers = express.Router();

routers.post(
  "/uploadimage/:employeeid",
  uploadImageMiddleware.single("image"),
  uploadImage
);
routers.post(
  "/publishsample",
  uploadImageMiddleware.single("image"),
  publishSample
);
routers.get("/gettokenid", getTokenId);
routers.get("/getnftmetadata/:tokenid.json", getNFTMetadata);
routers.get("/getnftimage/:tokenid.jpeg", getNFTImage);
export default routers;
