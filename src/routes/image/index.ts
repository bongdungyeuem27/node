import express from 'express';
import { postImage } from '~controllers/image/index.js';
import {upload} from "~middlewares/index"

const routers = express.Router();

routers.post('/', upload.single('image'), postImage);

export default routers;
