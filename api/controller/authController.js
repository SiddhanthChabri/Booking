import { dbInit } from "../postgres/postgres.js";
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js"; 
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const register = async (req, res, next) => {
  try {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt)
    const { UserModel } = await dbInit(); // Ensure models are initialized
    const newUser = await UserModel.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    res.status(200).send("User created successfully.");
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { UserModel } = await dbInit();
    const user = await UserModel.findOne({where: {username: req.body.username} });
    if(!user) return next(createError(404, "User not found"));

    const token = jwt.sign({id: user.id, isAdmin: user.isAdmin}, process.env.JWT)

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))
        const {password, isAdmin, ...otherDetails} = user.toJSON();
    res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    })
    .status(200).json({...otherDetails});
  } catch (error) {
    next(error);
  }
};
