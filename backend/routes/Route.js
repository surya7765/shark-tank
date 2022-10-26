import express from "express";
import AuthController from "../controllers/AuthController.js";
import JobPostingController from "../controllers/JobPostingController.js";
import protect from "../middleware/Auth.js";
const router = express.Router();
import upload from "../middleware/UploadPDF.js";


// User register, login, geting user, updating user 
router.post("/register",  upload.single('resume_pdf'), AuthController.register);
router.post("/login", AuthController.login);
router.get("/user/:_id",protect, AuthController.getUser);
router.patch("/user/:_id", protect, AuthController.updateUser);
router.delete("/user/:_id", protect, AuthController.deleteUser);


// Admin authentication, geting all job post, getting job post, updating job post, deleting job post
router.post("/admin/register",  AuthController.registerAdmin);
router.post("/admin/login",  AuthController.loginAdmin);
router.get("/admin", JobPostingController.getAllJobPost);
router.post("/admin/jobpost", JobPostingController.postJob);
router.get("/admin/jobpost/:_id", JobPostingController.getJobPost);
router.patch("/admin/jobpost/:_id", JobPostingController.updateJobPost);
router.delete("/admin/jobpost/:_id", JobPostingController.deleteJobPost);

export default router;
