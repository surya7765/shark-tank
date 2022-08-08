import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import UserModel from "../models/User.js";


const protect = asyncHandler(async(req,res,next)=>{
  let token;
  // console.log(req.headers.authorization.startsWith("Bearer"));
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
      // console.log(req.headers.authorization.split(" ")[1]);
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, "hello@#123#@123");
      console.log(decoded);
      req.user = await UserModel.findById(decoded.id).select('-password');
      next();
    }catch(err){
      return res.status(401).send({message:'Please authenticate'});
    }
  }
})

export default protect