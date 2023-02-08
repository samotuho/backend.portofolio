import express from "express";
import { getUser, register, login } from "../controllers/Auth.Controller.js";
const router = express.Router();

router.get("/user", getUser);
router.post("/register", register);
router.post("/login", login);

export default router;
