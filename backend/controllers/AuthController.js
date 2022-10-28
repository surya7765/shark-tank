import UserModel from "../models/User.js";
import validators from "../validators/UserValidation.js";
import cloudinary from "../services/cloudinary.js";
import bcrypt from "bcrypt";

/*
Registering user if email id does not exists in the database.
*/
const register = async (req, res) => {
  // console.log(req.body);
  let userData = JSON.parse(JSON.parse(req.body.data));
  try {
    if (
      validators.validateName(userData.name) &&
      validators.validateEmail(userData.email) &&
      validators.validatePassword(userData.password) &&
      validators.validatePhone(userData.phoneno)
    ) {
     const user = await UserModel.findOne({ emailid: userData.email });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password,salt);

      // console.log(user);
      if (!user) {
        // const user = await UserModel.create(userData);
        const upload = await cloudinary.uploader.upload(req.file.path, {
          use_filename: true,
          unique_filename: false,
          overwrite: true,
        });
        const createUser = await UserModel.create({
          name: userData.name,
          emailid: userData.email,
          password: hashedPassword,
          phoneno: userData.phoneno,
          address: userData.address,
          workExp: userData.workExp,
          skills: userData.skills,
          resume: upload?.secure_url,
        });
        if (!createUser) {
          let err = new Error("Registration failed!");
          err.status = 400;
          throw err;
        }
        res.status(201).json({ message: "User added successfully" });
      } else {
        let err = new Error("User already exists");
        err.status = 409;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
};

const login = async (req, res, next) => {
  try {
    if (validators.validateEmail(req.body.emailid)) {
      const user = await UserModel.findOne({ emailid: req.body.emailid });
      // console.log(user);
      if (user) {
        if (user.password === req.body.password) {
          res.status(200).json({ message: "Login successfull" });
          next();
        } else {
          res.status(200).json({ message: "Invalid Password/Email" });
        }
      } else {
        let err = new Error("Please register yourself or Enter correct Email!");
        err.status = 400;
        throw err;
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
};

export default { register, login };
