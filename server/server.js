import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import errorHandler from "./middlewares/errorHandler.js";
import path from "path";
dotenv.config();
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const app = express();

import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/upload.js";

import userRoutes from "./routes/user.js";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// auth routes
app.use("/api", authRoutes);

// upload routes// upload routes
app.use("/api", uploadRoutes);

// user routes
app.use("/user", userRoutes);

// Database connection
import "./config/database.js";

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// declareing the port here
const PORT = process.env.PORT || 5000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
