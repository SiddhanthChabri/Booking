import express from "express";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import prisma from "./postgres/postgres.js"; // Import prisma client
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// CORS configuration to allow frontend (React) to access the backend
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL in development
  credentials: true               // Allow credentials (cookies, authorization headers)
}));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? err.stack : {}
  });
});

// Connect to database and start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Test Prisma connection
  prisma.$connect()
    .then(() => console.log("Prisma connected to the database"))
    .catch(err => console.error("Prisma connection error:", err));
});

