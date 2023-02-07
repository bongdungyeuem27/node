import { Request, Response } from "express";
import { create } from "ipfs-http-client";
import { resize } from "~helpers/imageHandler";

export const postImage = async (req: Request, res: Response) => {
  try {
    const buffer = req.file.buffer;
    let sharp = resize(buffer, 1000, 1000);
    const client = create({
      host: process.env.IPFS_HOST,
      port: Number(process.env.IPFS_PORT),
      protocol: process.env.IPFS_PROTOCOL,
    });
   
    const { cid } = await client.add(sharp);
    res.status(200).json(cid.toString());
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};
