import express from "express";
import { dbInit, UserModel } from "../postgres/postgres.js";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Initialize the database model once globally
(async () => {
  try {
    await dbInit();
    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
})();

// AUTH CHECKS
router.get("/checkauthentication", verifyToken, (req, res) => {
  res.send("Hello User, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res) => {
  res.send("Hello User, you are logged in and you can delete the account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
  res.send("Hello Admin, you are logged in and can delete all accounts");
});

// CREATE
router.post("/", createUser);

// UPDATE
router.put("/:id", verifyUser, updateUser);

// GET All
router.get("/getAll", verifyAdmin, getUsers);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

export default router;
