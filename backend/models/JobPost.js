import mongoose from "mongoose";

const JobPostSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Admin",
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
    },
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },
    jobRole: {
      type: String,
      required: [true, "Job role is required"],
    },
    responsibility: {
      type: String,
      required: [true, "Responsibility is required"],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
    },
    experience: {
      type: Number,
      required: [true, "Experience is required"],
    },
    salary: {
      type: String,
      required: [true, "Salary is required"],
    },
    positions: {
      type: Number,
      required: [true, "Postion is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    skills: {
      type: String,
      required: [true, "Skills is required"],
    },
    degree: {
      type: String,
      required: [true, "Degree is required"],
    },
    companyInfo: {
      type: String,
      required: [true, "Company info is required"],
    },
    empType: {
      type: String,
      required: [true, "Employment type is required"],
    },
    industryType: {
      type: String,
      required: [true, "Industry type is required"],
    },
    searchKeywords: {
      type: String,
      required: [true, "Search Keywords is required"],
    },
    hotJob: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
const JobPost = mongoose.model("Jobpost", JobPostSchema);

export default JobPost;
