import express from "express";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js";
import { Sequelize } from "sequelize";
import pg from "pg";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();




const app = express();

const db = new pg.Client(
  {
    user: "postgres",
    host: "localhost",
    database: "Booking",
    password: "12345",
    port: 5432,
  },
  console.log("Connected to PG")
);

app.get("/", (req, res) => {
  res.send("Hello");
});


//middlewares

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((req, res, next)=>{
  console.log("I am a middleware");
})

app.listen(8000, () => {
  db.connect();
  console.log("Connected to backend!");
});
