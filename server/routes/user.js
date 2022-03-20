import express from "express";
import authCtrl from "../controllers/authCtrl.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

// update user
router.patch("/update", auth, authCtrl.updateUser);

// reset password
router.post("/reset", auth, authCtrl.resetPassword);

// forgot password route

router.post("/forgot_password", authCtrl.forgotPassword);

export default router;
