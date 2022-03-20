import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadController = {
  async uploadAvatar(req, res, next) {
    try {
      const file = req.files.file;
      //   console.log("file", file);

      cloudinary.v2.uploader.upload(
        file.tempFilePath,
        {
          folder: "quickshop",
        },
        async (err, result) => {
          if (err) throw err;

          removeTmp(file.tempFilePath);

          res.json({ url: result.secure_url });
        }
      );
    } catch (err) {
      return next(err);
    }
  },
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
export default uploadController;
