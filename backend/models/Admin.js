import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
