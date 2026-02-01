import express from "express";
import { getProducts, newProducts, getProductDetails } from "../controllers/productControllers.js";


const router = express.Router();

// getProducts route
router.route('/products').get(getProducts)

//admin add new products rouute
router.route('/admin/newProducts').post(newProducts)

// get single proudct by id
router.route('/products/:id').get(getProductDetails)

export default router;