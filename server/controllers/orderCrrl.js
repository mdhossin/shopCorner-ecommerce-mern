import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import CustomErrorHandler from "../services/CustomErrorHandler.js";

const orderCtrl = {
  async newOrder(req, res, next) {
    try {
      const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = req.body;

      const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
      });

      res.status(201).json({
        success: true,
        order,
      });
    } catch (error) {
      return next(error);
    }
  },
  //   async updateProducts(req, res, next) {
  //     try {
  //       const { name, description, Stock, price, isActive, images, ratings } =
  //         req.body;
  //       if (!images) {
  //         return next(CustomErrorHandler.badRequest("No image upload"));
  //       }

  //       await Products.findOneAndUpdate(
  //         { _id: req.params.id },
  //         {
  //           name,
  //           description,
  //           Stock,
  //           price,
  //           isActive,
  //           images,
  //           ratings,
  //         },
  //         { new: true }
  //       );

  //       res.json({ message: "Updated a Product" });
  //     } catch (err) {
  //       return next(err);
  //     }
  //   },
  //   async deleteProducts(req, res, next) {
  //     try {
  //       try {
  //         await Products.findByIdAndDelete(req.params.id);
  //         res.json({ message: "Deleted a Product" });
  //       } catch (err) {
  //         return next(err);
  //       }
  //     } catch (err) {
  //       return next(err);
  //     }
  //   },
  async getOrderById(req, res, next) {
    let order;
    try {
      order = await Order.findOne({ _id: req.params.id })
        .populate("user", "name email")
        .select("-updatedAt -__v");

      if (!order) {
        return next(
          CustomErrorHandler.badRequest("Order not found with this Id.")
        );
      }
    } catch (err) {
      return next(err);
    }

    res.json(order);
  },
  // get user all order
  async myOrders(req, res, next) {
    console.log(req.user._id);
    let orders;
    try {
      orders = await Order.find({ user: req.user._id })
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.json(orders);
  },
  // search api
  // fetch  product name search api
};

export default orderCtrl;
