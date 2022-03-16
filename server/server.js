import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import path from "path";
dotenv.config();

const app = express();

import authRoutes from "./routes/auth.js";

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// user routes
app.use("/api", authRoutes);

// upload routes

//

// Database connection
import "./config/database.js";
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected...");
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

// declareing the port here
const PORT = process.env.PORT || 5000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
