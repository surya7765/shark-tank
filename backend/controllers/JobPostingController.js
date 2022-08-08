import JobPost from "../models/JobPost.js";

const postJob = async (req, res) => {
  try {
    const jobPost = await JobPost.create(req.body);
    if (!jobPost) {
      let err = new Error("Job Posting failed!");
      err.status = 400;
      throw err;
    }
    res.status(200).json({ message: "Job Posting Successful" });
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
};

const getAllJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.find();
    if (!jobPost) {
      let err = new Error("No Job Posting found!");
      err.status = 400;
      throw err;
    }
    res.status(200).json({ jobPost });
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
}

const getJobPost = async (req,res) => {
  try {
    const jobPost = await JobPost.findById(req.params._id);
    if (!jobPost) {
      let err = new Error("Job Post not found!");
      err.status = 400;
      throw err;
    }
    res.status(200).json({ jobPost });
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
}

const updateJobPost = async (req,res) => {
  try {
    const jobPost = await JobPost.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!jobPost) {
      let err = new Error("Job Posting not found!");
      err.status = 400;
      throw err;
    }
    res.status(200).json({ message: "Job Post updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
}

const deleteJobPost = async (req,res) =>{
  try {
    const jobPost = await JobPost.findByIdAndDelete(req.params._id);
    if (!jobPost) {
      let err = new Error("Job Posting not found!");
      err.status = 400;
      throw err;
    }
    res.status(200).json({ message: "Job Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
}

export default {
  postJob,
  getAllJobPost,
  updateJobPost,
  getJobPost,
  deleteJobPost,
};