import express from "express";
import uploadController from "../controllers/uploadCtrl.js";
import uploadImage from "../middlewares/uploadImage.js";
import auth from "../middlewares/auth.js";
const router = express.Router();
// upload image  middleware for user
router.post("/upload_image", auth, uploadImage, uploadController.uploadAvatar);

// delete image
router.post("/destroy", auth, uploadController.destroy);

export default router;
