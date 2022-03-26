import Products from "../models/productModel.js";
import CustomErrorHandler from "../services/CustomErrorHandler.js";

// filering, sorting and paginatig

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString }; // req.query = querySting same jinis

    // console.log(queryObj); // before delete page

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((element) => delete queryObj[element]);

    console.log(queryObj); // after delete page

    let queryStr = JSON.stringify(queryObj);
    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    this.query.find(JSON.parse(queryStr));
    // console.log(this);
    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 8;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const productCtrl = {
  async getProducts(req, res, next) {
    try {
      const features = new APIfeatures(Products.find(), req.query)
        .filtering()
        .sorting()
        .paginating();
      const products = await features.query;

      if (products.length < 0) {
        return res.status(404).json({
          message: "No product found.",
        });
      }

      res.json({
        status: "success",
        result: products.length,
        products: products,
      });
    } catch (err) {
      return next(err);
    }
  },
  async createProduct(req, res, next) {
    try {
      const { name, description, quantity, price, isActive, images, ratings } =
        req.body;

      if (!images) {
        return next(
          CustomErrorHandler.wrongValidation("You must upload image.")
        );
      }

      if (!description || !name) {
        return res
          .status(400)
          .json({ message: "You must enter description & name." });
      }

      if (!quantity) {
        return res.status(400).json({ message: "You must enter a quantity." });
      }

      if (!price) {
        return res.status(400).json({ message: "You must enter a price." });
      }

      const product = new Products({
        name: name.toLowerCase(),
        description,
        quantity,
        price,
        isActive,
        images,
        ratings,
      });

      const savedProduct = await product.save();

      res.json({
        message: `Product has been added successfully!`,
        product: savedProduct,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updateProducts(req, res, next) {
    try {
      const { name, description, quantity, price, isActive, images, ratings } =
        req.body;
      if (!images) {
        return next(CustomErrorHandler.wrongValidation("No image upload"));
      }

      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
          description,
          quantity,
          price,
          isActive,
          images,
          ratings,
        },
        { new: true }
      );

      res.json({ message: "Updated a Product" });
    } catch (err) {
      return next(err);
    }
  },
  async deleteProducts(req, res, next) {
    try {
      try {
        await Products.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted a Product" });
      } catch (err) {
        return next(err);
      }
    } catch (err) {
      return next(err);
    }
  },
  async getByIdProduct(req, res, next) {
    let product;
    try {
      product = await Products.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(err);
    }

    res.json(product);
  },
  async getAllProducts(req, res, next) {
    let products;
    try {
      products = await Products.find()
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.json(products);
  },
  // search api
  // fetch  product name search api
};

export default productCtrl;
