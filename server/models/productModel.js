import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    imageUrl: {
      type: String,
    },

    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema, "products");
