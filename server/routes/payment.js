import express from "express";
import paymentConroller from "../controllers/paymentCrtl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// router.route("/payment/process").post(auth, paymentConroller.processPayment);
router.post("/payment/process", auth, paymentConroller.processPayment);

export default router;
