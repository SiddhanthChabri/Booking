import express from "express";
import prisma from "../postgres/postgres.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotels, updateHotel } from "../controller/hotelController.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// GET All
router.get("/getAll", getHotels);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;