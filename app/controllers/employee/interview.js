import path from "path";
import fs from "fs";
import { create } from 'ipfs-http-client'

export const addVideo = async (req, res) =>{
    try {
        const buffer = req.file.buffer;
        // const imageVideo = path.join(`./public/employee/interview/`);
        // if (!fs.existsSync(imageVideo)){
        //     fs.mkdirSync(imageVideo);
        // }

        // fs.writeFileSync(imageVideo + "video.mp4", buffer, { encoding: 'binary' });
        
        const client = create({
          host: process.env.IPFS_HOST,
          port: Number(process.env.IPFS_PORT),
          protocol: process.env.IPFS_PROTOCOL,
        });
      
        const { cid } = await client.add(buffer);
        res.status(200).json(cid.toString());
      } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
      res.end();
}