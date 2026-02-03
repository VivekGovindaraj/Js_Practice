import express from "express";
import { getProducts, newProducts, getProductDetails, updateProduct, deleteProduct } from "../controllers/productControllers.js";


const router = express.Router();

// getProducts route
router.route('/products').get(getProducts)

//admin add new products rouute
router.route('/admin/newProducts').post(newProducts)

// get single proudct by id
router.route('/products/:id').get(getProductDetails)

// Update product by id 
router.route('/products/:id').put(updateProduct)

// delete single product
router.route('/product/:id').delete(deleteProduct)

export default router;