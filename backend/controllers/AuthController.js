import UserModel from "../models/User.js";
import validators from "../validators/UserValidation.js";

/*
Registering user if email id does not exists in the database.
*/
const register = async (req, res) => {
  // console.log(req.body);
  try {
    if (
      validators.validateName(req.body.name) &&
      validators.validateEmail(req.body.emailid) &&
      validators.validatePassword(req.body.password) &&
      validators.validatePhone(req.body.phoneno)
    ) {
      const user = await UserModel.findOne({ emailid: req.body.emailid });
      // console.log(user);
      if (!user) {
        // const user = await UserModel.create(req.body);
        const createUser = await UserModel.create({
          name: req.body.name,
          emailid: req.body.emailid,
          password: req.body.password,
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
