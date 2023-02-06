import express from "express";
import * as imageHandler from "../../helper/imageHandler.js";
import * as folderHandler from "../../helper/folderHandler.js";
import path from "path";
import generate from "../../helper/generate.js";

const routers = express.Router();

export async function deleteImage(req, res) {
  try {
    var imagename = req.params.imagename;
    let businessId = req.params.businessid;
    if (!imagename || !businessId) {
      res.status(500);
      res.end("500");
      return;
    }
    var filePath = path.join(
      `./public/business/${businessId}/post/${imagename}.png`
    );
    await folderHandler
      .remove(filePath)
      .then((success) => {
        res.status(200);
        res.json({ status: "success" });
      })
      .catch((error) => {
        res.status(500);
        res.json({ status: "error" });
        console.error(error);
      });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end("500");
  }
}
export async function getImage(req, res) {
  try {
    var imagename = req.params.imagename;
    let businessId = req.params.businessid;
    if (!imagename || !businessId) {
      res.status(500);
      res.end("500");
      return;
    }
    var filePath = path.join(
      `.//public/business/${businessId}/post/${imagename}.png`
    );

    // Checking if the path exists
    await folderHandler
      .exists(filePath)
      .then(async (success) => {
        // Setting the headers
        res.writeHead(200, {
          "Content-Type": "image/png",
        });

        // Reading the file
        await folderHandler
          .read(filePath)
          .then((success) => {
            res.status(200);
            res.end(success);
            return;
          })
          .catch((error) => console.error(error));
        res.status(500);
        res.end();
      })
      .catch((error) => {
        console.error(error);
        res.status(404);
        res.end();
        return;
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end("500");
  }
}
export async function postImage(req, res) {
  // folder upload
  try {
    let businessId = req.params.businessid;
    if (!businessId) {
      res.status(500);
      res.end("500");
      return;
    }
    if (!req?.file?.buffer) {
      res.status(401).json({ error: "Please provide an image" });
      res.end();
      return;
    }
    let buffer = req.file.buffer;
    let sharp = imageHandler.resize(buffer, 1000, 1000);
    const filename = generate(5);
    const imagePath = path.join(`./public/business/${businessId}/post`);
    folderHandler.create(imagePath);
    await imageHandler
      .save(sharp, "png", imagePath + "/" + filename)
      .then((success) => {
        return res
          .status(200)
          .json({ ...success, name: filename, status: "success" })
          .end();
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ name: filename, status: "error" }).end();
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end("500");
  }
}

export default routers;
