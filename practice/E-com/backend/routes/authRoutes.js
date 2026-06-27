import express from "express";
import { user, registerUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

router.get('/home', user)
router.post("/register" , registerUser)
router.get("/login", loginUser)
export default router