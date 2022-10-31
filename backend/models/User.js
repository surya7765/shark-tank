import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailid: {
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
  },
  address: {
    address1: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalcode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  workExp: {
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
  },
  skills: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
