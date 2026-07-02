import express from "express";
import { getproducts, createProduct, updateProduct, deleteProduct } from "../controllers/productControllers.js";
import { protect } from "../middleware/authMiddleware.js";

console.log(protect);
const router = express.Router();

router.route('/')
.get( getproducts )
.post(protect,createProduct)

router.route('/:id')
.put(updateProduct)
.delete(deleteProduct)

export default router