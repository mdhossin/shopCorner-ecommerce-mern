import express from "express";
import orderCtrl from "../controllers/orderCrrl.js";
import auth from "../middlewares/auth.js";
import authAdmin from "../middlewares/authAdmin.js";
const router = express.Router();

router.post("/order/new", auth, orderCtrl.newOrder);
router.get("/orders/me", auth, orderCtrl.myOrders);
router.get("/orders/:id", auth, orderCtrl.getOrderById);

// admin routes
router.get("/admin/orders", auth, authAdmin, orderCtrl.getAllOrders);
router
  .route("/admin/order/:id")
  .put(auth, authAdmin, orderCtrl.updateOrder)
  .delete(auth, authAdmin, orderCtrl.deleteOrder);

export default router;
