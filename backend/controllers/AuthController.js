import Admin from "../models/Admin.js";
import UserModel from "../models/User.js";
import validators from "../validators/UserValidation.js";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt'


/*
Registering user if email id does not exists in the database.
*/
const register = asyncHandler(async (req, res) => {
  // console.log(req.body);
  try {
    if (
      validators.validateName(req.body.name) &&
      validators.validateEmail(req.body.email) &&
      validators.validatePassword(req.body.password) &&
      validators.validatePhone(req.body.phoneno)
    ) {
      const user = await UserModel.findOne({ email: req.body.email });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password,salt);

      // console.log(user);
      if (!user) {
        // const user = await UserModel.create(req.body);
        const createUser = await UserModel.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          phoneno: req.body.phoneno,
          address: req.body.address,
          workExp: req.body.workExp,
          skills: req.body.skills,
        });
        if (!createUser) {
          let err = new Error("Registration failed!");
          err.status = 400;
          throw err;
        }
        res
          .status(200)
          .send({ message: "User added successfully", token: generateToken(createUser._id) });
      } else {
        let err = new Error("User already exists");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
});


// Login user if email id and password is correct.
const login = asyncHandler(async (req, res, next) => {
  // console.log(req.body);
  try {
    if (validators.validateEmail(req.body.email)) {
      const user = await UserModel.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
          res
            .status(200)
            .send({
              message: "Login successfull",
              token: generateToken(user._id),
            });
          next();
        } else {
          let err = new Error("Invalid Password");
          err.status = 400;
          throw err;
        }
      } else {
        let err = new Error("Please register yourself or Enter correct Email!");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(400).send({ message: err.toString() });
  }
});


// GET user details using id from the database.
const getUser = asyncHandler(async (req, res) => {
  // console.log(req.user);
  try {
    const user = await UserModel.findById(req.user.id);
    if (user) {
      res.status(200).send({ user });
    } else {
      let err = new Error("User not found");
      err.status = 400;
      throw err;
    }
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
});


// Update user details using id from the database.
const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (user) {
      const updateUser = await UserModel.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true }
      );
      if (updateUser) {
        res.status(200).send({ message: "User updated successfully" });
      } else {
        let err = new Error("User not found");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
});

// Delete user details using id from the database.
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (user) {
      const deleteUser = await UserModel.findOneAndDelete({
        _id: req.params._id,
      });
      if (deleteUser) {
        res.status(200).send({ message: "User deleted successfully" });
      } else {
        let err = new Error("User not found");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
});


// Registering admin if email id does not exists in the database.
const registerAdmin = asyncHandler(async (req, res) => {
  // console.log(req.body);
  try {
    if (
      validators.validateName(req.body.name) &&
      validators.validateEmail(req.body.email) &&
      validators.validatePassword(req.body.password) &&
      validators.validatePhone(req.body.phoneno)
    ) {
      const user = await Admin.findOne({ email: req.body.email });
      // console.log(user);
      if (!user) {
        // const user = await Admin.create(req.body);
        const createUser = await Admin.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phoneno: req.body.phoneno,
        });
        if (!createUser) {
          let err = new Error("Registration failed!");
          err.status = 400;
          throw err;
        }
        res.status(200).send({ message: "User added successfully" });
      } else {
        let err = new Error("User already exists");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
});


// Login admin if email id and password is correct.
const loginAdmin = asyncHandler(async (req, res, next) => {
  try {
    if (validators.validateEmail(req.body.email)) {
      const user = await Admin.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        if (user.password === req.body.password) {
          res.status(200).send({ message: "Login successfull" });
          next();
        } else {
          res.status(200).send({ message: "Invalid Password/Email" });
        }
      } else {
        let err = new Error("Please register yourself or Enter correct Email!");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
});


const generateToken = (id) => {
  return jwt.sign({ id }, "hello@#123#@123", {
    expiresIn: "30d",
  });
};



export default {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
  registerAdmin,
  loginAdmin,
};