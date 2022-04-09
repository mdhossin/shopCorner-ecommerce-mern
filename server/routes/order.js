import express from "express";
import orderCtrl from "../controllers/orderCrrl.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/order/new", auth, orderCtrl.newOrder);

export default router;
