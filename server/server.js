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
import productRoutes from "./routes/product.js";
// import adminUpload from "./routes/adminUpload.js";
import paymentRoutes from "./routes/payment.js";

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
app.use("/api", authRoutes, uploadRoutes);

// products routes
app.use("/api", productRoutes);

// user routes
app.use("/user", userRoutes);

// payment routes
app.use("/api", paymentRoutes);

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
