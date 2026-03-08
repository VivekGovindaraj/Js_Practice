import express from "express";
import {registerUser, loginUser, logOut, forgetPassword, resetPassword, getUserProfile} from "../controllers/authController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logOut);
router.route('/password/forget').post(forgetPassword)
router.route('/password/reset/:token').put(resetPassword)
router.route('/me').get(isAuthenticatedUser,getUserProfile);
export default router; 