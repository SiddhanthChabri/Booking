import express from "express";
import { dbInit, RoomModel } from "../postgres/postgres.js";
import { createRoom, deleteRoom, getRooms, updateRoom } from "../controller/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Initialize the database asynchronously
(async () => {
  try {
    await dbInit();
    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
})();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// GET All
router.get("/getAll", getRooms);

// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

export default router;
