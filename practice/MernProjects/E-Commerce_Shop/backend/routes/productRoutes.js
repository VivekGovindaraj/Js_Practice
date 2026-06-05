import express from "express";
import { getProducts, newProducts, getProductDetails, updateProduct, deleteProduct } from "../controllers/productControllers.js";
import {isAuthenticatedUser, authorizeRole } from "../middleware/auth.js"

const router = express.Router();

// getProducts route
router.route('/products').get(getProducts)

//admin add new products rouute
router.route('/admin/newProducts').post(isAuthenticatedUser, authorizeRole("admin"),newProducts)

// get single proudct by id
router.route('/products/:id').get(getProductDetails)

// Update product by id 
router.route('/admin/products/:id').put(isAuthenticatedUser, authorizeRole("admin"),updateProduct)

// delete single product
router.route('/admin/products/:id').delete(isAuthenticatedUser, authorizeRole("admin"),deleteProduct)

export default router;