import mongoose from "mongoose";
import { MONGODB_URL } from "./index.js";

mongoose.connect(
  MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database connected...");
  }
);
