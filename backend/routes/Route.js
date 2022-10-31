import express from "express";
import AuthController from "../controllers/AuthController.js";
const router = express.Router();
import upload from "../middleware/UploadPDF.js";

router.post("/register", upload.single('resume'), AuthController.register);
router.post("/login", AuthController.login);

export default router;
