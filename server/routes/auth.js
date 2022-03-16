import express from "express";
import authCtrl from "../controllers/authCtrl.js";

const router = express.Router();

// register route
router.post("/register", authCtrl.register);

// verify and active account route
router.post("/active", authCtrl.activeAccount);

export default router;
