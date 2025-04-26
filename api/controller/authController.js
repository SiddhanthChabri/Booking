import prisma from "../postgres/postgres.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js"; 
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [
          { username },
          { email }
        ]
      }
    });
    
    if (existingUser) {
      return next(createError(409, "Username or email already exists"));
    }
    
    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create user
    const newUser = await prisma.users.create({
      data: {
        username,
        email,
        password: hash,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    // Find user
    const user = await prisma.users.findUnique({
      where: { username }
    });

    if (!user) return next(createError(404, "User not found"));

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"));

    // Generate token
    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT,
      { expiresIn: '1d' } // Add token expiration
    );

    // Remove password from response
    const { password: _, ...userDetails } = user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      })
      .status(200)
      .json(userDetails); // Include all user details (including isAdmin)
  } catch (error) {
    next(error);
  }
};