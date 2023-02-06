import * as imageHandler from "../../helper/imageHandler.js";
import path from "path";
import * as folderHandler from "../../helper/folderHandler.js";
import fs from "fs";
import generate from "../../helper/generate.js";
import { getContract as getContractMarket } from "../../contract/employeeMarket.js";

export const uploadImage = async (req, res) => {
  try {
    const employeeId = req.params.employeeid;
    const width = req.body.width;
    const height = req.body.height;
    const extension = "jpeg";
    const buffer = req.file.buffer;
    const sharp = imageHandler.resize(
      buffer,
      parseInt(width),
      parseInt(height)
    );
    let filename = "";
    let imagePath = "";
    while (true) {
      filename = generate(20);
      imagePath = path.join(`./public/employee/${employeeId}/customcv`);
      if (!fs.existsSync(imagePath + "/" + filename + "." + extension)) {
        break;
      }
    }
    folderHandler.create(imagePath);
    await imageHandler
      .save(sharp, extension, imagePath + "/" + filename)
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
  }
  res.end();
};

export const publishSample = async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const data = req.body.data;
    const image = req.file.buffer;

    const basePath = `/public/employee/customcv/`;
    const extensionImage = "jpeg";

    let sharp = imageHandler.resize(image, 1000, 1000);
    const filePath = path.join(`.${basePath}${id}`);
    folderHandler.create(path.join(`.${basePath}`));
    await imageHandler
      .save(sharp, extensionImage, filePath)
      .then((success) => {})
      .catch((error) => {
        console.error(error);
      });
    const fullUrl = req.protocol + "://" + req.get("host");
    const metadata = {
      id: id,
      name: name,
      image: `${fullUrl}/employee/customcv/getnftimage/${id}.${extensionImage}`,
      data: data,
    };

    const writeFilePromise = async () => {
      return new Promise(function (resolve, reject) {
        fs.writeFile(
          filePath + ".json",
          JSON.stringify(metadata),
          { flag: "w" },
          function (err) {
            if (err) reject(err);
            else resolve(name);
          }
        );
      });
    };
    const result = await writeFilePromise().catch((error) => {
      console.error(error);
    });
    res.status(200);
    res.json({ messages: "success", result });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
  res.end();
};

export const getTokenId = async (req, res) => {
  try {
    const hashId = req.query.hashid;
    const owner = req.query.owner;
    const contractMarket = await getContractMarket().catch((error) =>
      console.error(error)
    );
    const listMarket = await contractMarket.methods
      .getMarket()
      .call()
      .then((success) => {
        return success.filter((value, index) => {
          return value["owner"] == owner && value["hashId"] == hashId;
        });
      })
      .then((result) => {
        if (result.length == 0) {
          res.status(200);
          res.json({ messages: "not match" });
          return;
        }
        let nft = { ...result.at(0) };
        nft["tokenId"] = parseInt(nft["tokenId"]);
        nft["price"] = parseInt(nft["price"]);
        res.status(200);
        res.json({ messages: "success", nft: nft });
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
    res.status(500);
  }
  res.end();
};

export const getNFTMetadata = async (req, res) => {
  try {
    const tokenId = req.params.tokenid;
    const owner = req.query.owner;
    const basePath = path.join(`./public/employee/customcv/${tokenId}.json`);
    const readFilePromise = async () => {
      return new Promise((resolve, reject) => {
        fs.readFile(basePath, "utf8", function (err, data) {
          if (err) reject(err);
          if (data) resolve(JSON.parse(data));
        });
      });
    };

    const metadata = await readFilePromise().catch((error) => {
      console.error(error);
      res.status(404);
      res.json({ messages: "not found" });
      res.end();
      return;
    });

    const contractMarket = await getContractMarket();

    const balanceOf = await contractMarket.methods
      .balanceOf(owner, tokenId)
      .call();
    if (balanceOf == 0) metadata["data"] = undefined;
    res.status(200);
    res.json(metadata);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
  res.end();
};

export const getNFTImage = async (req, res) => {
  try {
    const tokenId = req.params.tokenid;
    const extensionImage = "jpeg";
    const filePath = path.join(
      `./public/employee/customcv/${tokenId}.${extensionImage}`
    );
    // Checking if the path exists
    const checkExistImage = await folderHandler.exists(filePath);
    if (!checkExistImage) {
      res.status(404);
      res.json({ message: "not found" });
      res.end();
      return;
    }

    // Reading the file
    const image = await folderHandler.read(filePath);

    if (image) {
      res.writeHead(200, {
        "Content-Type": `image/${extensionImage}`,
      });
      res.status(200);
      res.end(image);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
  res.end();
};
