import express from "express";
import * as imageHandler from "../../helper/imageHandler.js";
import uploadImageMiddleware from "../../middleware/uploadImageMiddleware.js";
import * as folderHandler from "../../helper/folderHandler.js";
import path from "path";


const routers = express.Router();

routers.delete("/avatar/:id", async function (req, res) {
  var id = req.params.id;
  if (!id) {
    re.status(500);
    res.end("500");

    return;
  }
  var filePath = path.join(`./public/employee/${id}/profile/avatar.png`);
  
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
});

routers.get("/avatar/:id", async (req, res) => {
  // Extracting the path of file
  var id = req.params.id;
  if (!id) {
    re.status(500);
    res.end("500");

    return;
  }
  var filePath = path.join(`./public/employee/${id}/profile/avatar.png`);
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
});
routers.post(
  "/avatar/:id",
  uploadImageMiddleware.single("image"),
  async function (req, res) {
    // folder upload

    if (!req?.file?.buffer) {
      res.status(401).json({ error: "Please provide an image" });
      res.end();
      return;
    }
    if (!req?.params?.id) {
      res.status(401).json({ error: "Please provide an id" });
      res.end();
      return;
    }
    let id = req.params.id;
    let buffer = req.file.buffer;
    let sharp = imageHandler.resize(buffer, 1000, 1000);
    const filename = "avatar";
    const imagePath = path.join(`./public/employee/${id}/profile`);
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
  }
);

export default routers;
