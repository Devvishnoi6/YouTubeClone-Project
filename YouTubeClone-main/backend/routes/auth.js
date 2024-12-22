import express from "express";
import { loginUser, signupUser, googleAuth } from "../controllers/auth.js";

const router = express.Router();

// Login Route
router.post("/login", loginUser);

// Signup Route
router.post("/signup", signupUser);

// SIGN WITH GOOGLE
router.post("/google", googleAuth);

export default router;
