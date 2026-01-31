import express from "express";
import { getProducts, newProducts } from "../controllers/productControllers.js";


const router = express.Router();

// getProducts route
router.route('/products').get(getProducts)

//admin add new products rouute
router.route('/admin/newProducts').post(newProducts)

export default router;