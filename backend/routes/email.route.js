import express from "express";
import { sendEmail_and_saveEmail } from "../controllers/email.controller.js";

const router = express.Router();

// Define the route with the callback function
router.post("/send-email", sendEmail_and_saveEmail);

export default router;
