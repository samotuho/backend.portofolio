import express from "express";
import { getContactAll, getContactById, createContact, updateContact, deleteContact } from "../controllers/ContactController.js";
const router = express.Router();

router.get("/contact", getContactAll);
router.get("/contact/:id", getContactById);
router.post("/contact", createContact);
router.patch("/contact/:id", updateContact);
router.delete("/contact/:id", deleteContact);

export default router;
