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
router.get("/users", auth, authAdmin, authCtrl.getAllUser);

// update user role only admin
router.patch("/update_role/:id", auth, authAdmin, authCtrl.updateUsersRole);

// delete user only can admin
router.delete("/delete/:id", auth, authAdmin, authCtrl.deleteUser);

export default router;
