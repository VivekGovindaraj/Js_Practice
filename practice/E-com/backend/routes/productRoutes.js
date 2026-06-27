import express from "express";
import { getproducts, createProduct, updateProduct, deleteProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.route('/')
.get( getproducts )
.post(createProduct)

router.route('/:id')
.put(updateProduct)
.delete(deleteProduct)

export default router