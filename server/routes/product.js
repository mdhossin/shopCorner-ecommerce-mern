import express from "express";
import productCtrl from "../controllers/productCtrl.js";
import auth from "../middlewares/auth.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = express.Router();
// must be authenticated and admin

router.get("/admin/products", productCtrl.getAllProducts);

router
  .route("/products")
  .get(productCtrl.getProducts)

  .post(auth, authAdmin, productCtrl.createProduct);

router
  .route("/products/:id")
  .get(productCtrl.getByIdProduct)
  .delete(auth, authAdmin, productCtrl.deleteProducts)
  .put(auth, authAdmin, productCtrl.updateProducts);

export default router;
