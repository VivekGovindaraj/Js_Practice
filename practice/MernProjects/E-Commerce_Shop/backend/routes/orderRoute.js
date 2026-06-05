import express from "express";
import { isAuthenticatedUser, authorizeRole } from "../middleware/auth.js";
import { getOrderDetails, myOrder, newOrder, allOrders, updateOrders, deleteOrder } from "../controllers/orderController.js";

const router = express.Router();
router.route('/orders/new').post(isAuthenticatedUser, newOrder)
router.route('/orders/:id').get(isAuthenticatedUser, getOrderDetails)
router.route('/me/orders').get(isAuthenticatedUser, myOrder)
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRole("admin"), allOrders)
router.route('/admin/orders/:id')
.put(isAuthenticatedUser, authorizeRole("admin"), updateOrders)
.delete(isAuthenticatedUser,authorizeRole("admin"), deleteOrder)

export default router;
