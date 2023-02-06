import express from "express";
import uploadImageMiddleware from "../../middleware/uploadImageMiddleware.js";
import {
  getImage,
  deleteImage,
  postImage,
} from "../../controllers/business/post.js";

const routers = express.Router();

try {
  routers.get("/:businessid/:imagename", getImage);
  routers.delete("/:businessid/:imagename", deleteImage);
  routers.post(
    "/:businessid",
    uploadImageMiddleware.single("image"),
    postImage
  );
} catch (error) {
  console.error(error);
}

export default routers;
