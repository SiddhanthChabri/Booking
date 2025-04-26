// users.js
import prisma from "../postgres/postgres.js";  // Import the Prisma client

// Create user
export const createUser = async (req, res, next) => {
  try {
    // Don't expose password in response
    const newUser = await prisma.users.create({
      data: req.body,
    });
    
    // Remove password from response
    const { password, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword); // Use 201 for resource creation
  } catch (error) {
    if (error.code === 'P2002') {
      // Handle unique constraint violation
      return res.status(409).json({ 
        error: "Username or email already exists" 
      });
    }
    next(error);
  }
};

// Get all users
export const getUsers = async (req, res, next) => {
  try {
    // Don't expose passwords in response
    const allUsers = await prisma.users.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update user
export const updateUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    
    // Check if user exists
    const userExists = await prisma.users.findUnique({
      where: { id: userId }
    });
    
    if (!userExists) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // Hash password if it's being updated
    let data = { ...req.body };
    if (data.password) {
      const bcrypt = await import('bcrypt');
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ 
        error: "Username or email already exists" 
      });
    }
    next(error);
  }
};

// Delete user
export const deleteUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await prisma.users.delete({
      where: { id: userId },
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};