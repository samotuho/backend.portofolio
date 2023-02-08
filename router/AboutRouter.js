import express from "express";
import { getAboutAll, getAboutById, createAbout, updateAbout, deleteAbout } from "../controllers/AboutController.js";
const router = express.Router();

router.get("/about", getAboutAll);
router.get("/about/:id", getAboutById);
router.post("/about", createAbout);
router.patch("/about/:id", updateAbout);
router.delete("/about/:id", deleteAbout);

export default router;
