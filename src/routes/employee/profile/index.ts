import express from 'express';
import { getAvatar, postAvatar } from '~controllers/employee/profile/index';
import { upload } from '~middlewares/image/uploadImageMiddleware';

const routers = express.Router();

routers.post('/avatar', upload.single('image'), postAvatar);
routers.get('/avatar/:cid', getAvatar);

export default routers;
