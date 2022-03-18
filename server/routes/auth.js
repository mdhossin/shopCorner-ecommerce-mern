import express from "express";
import authCtrl from "../controllers/authCtrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// register route
router.post("/register", authCtrl.register);

// verify and active account route
router.post("/active", authCtrl.activeAccount);

// login route

router.post("/login", authCtrl.login);

// logout route must be authenticated

router.get("/logout", auth, authCtrl.logout);

// refresh token route

router.get("/refresh_token", authCtrl.refreshToken);

// google login route
router.post("/google_login", authCtrl.googleLogin);

export default router;
