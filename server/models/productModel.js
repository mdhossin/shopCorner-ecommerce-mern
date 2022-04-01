import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    images: {
      type: Object,
      required: true,
    },

    description: {
      type: String,
      trim: true,
      required: true,
    },
    Stock: {
      type: Number,
      required: true,
      default: 1,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema, "products");
