import express from "express";
import uploadController from "../controllers/uploadCtrl.js";
import uploadImage from "../middlewares/uploadImage.js";
const router = express.Router();
// upload image hocche middleware
router.post("/upload_image", uploadImage, uploadController.uploadAvatar);

export default router;
