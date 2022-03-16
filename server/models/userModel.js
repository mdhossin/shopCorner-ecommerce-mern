import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    role: {
      type: String,
      default: "user", // admin
    },
    type: {
      type: String,
      default: "register", // login
    },
    rf_token: { type: String, select: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
