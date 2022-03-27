import express from "express";
import authCtrl from "../controllers/authCtrl.js";
import auth from "../middlewares/auth.js";
import authAdmin from "../middlewares/authAdmin.js";
const router = express.Router();

// update user
router.patch("/update", auth, authCtrl.updateUser);

// reset password
router.post("/reset", auth, authCtrl.resetPassword);

// forgot password route

router.post("/forgot_password", authCtrl.forgotPassword);

// all user information route only admin can get
router.get("/all_infor", auth, authAdmin, authCtrl.getAllUser);

export default router;
