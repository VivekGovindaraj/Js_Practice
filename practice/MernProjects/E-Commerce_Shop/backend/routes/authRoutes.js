import express from "express";
import {registerUser, loginUser, logOut, forgetPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUser ,
         getUserDetails, deleteUser, updateUserProfile} from "../controllers/authController.js";
import { isAuthenticatedUser , authorizeRole} from "../middleware/auth.js";

const router = express.Router();
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logOut);
router.route('/password/forget').post(forgetPassword)
router.route('/password/reset/:token').put(resetPassword)
router.route('/me').get(isAuthenticatedUser,getUserProfile);
router.route('/password/update').put(isAuthenticatedUser,updatePassword);
router.route('/me/update').put(isAuthenticatedUser,updateProfile);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRole("admin"),getAllUser);
router.route('/admin/users/:id')
.get(isAuthenticatedUser, authorizeRole("admin"), getUserDetails)
.put(isAuthenticatedUser, authorizeRole("admin"), updateUserProfile)
.delete(isAuthenticatedUser, authorizeRole("admin"), deleteUser)

export default router; 