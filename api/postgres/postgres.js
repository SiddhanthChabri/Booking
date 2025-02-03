import { Sequelize } from "sequelize";
import { createHotelModel } from "../models/Hotel.js";
import { createUserModel } from "../models/User.js";
import { createRoomModel } from "../models/Room.js";

const sequelize = new Sequelize("Booking", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

let HotelModel, UserModel, RoomModel;

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    HotelModel = createHotelModel(sequelize); // Define Hotel model
    UserModel = createUserModel(sequelize); // Define User model
    RoomModel = createRoomModel(sequelize); // Define Room model
    await sequelize.sync();
    console.log("Database Synced.");
  } catch (error) {
    console.error("Unable to connect to database:", error.message);
  }
};

const dbInit = async () => {
  if (!HotelModel || !UserModel || !RoomModel) {
    await connection(); // Ensure the connection is established
  }
  return { HotelModel, UserModel, RoomModel}; // Return the initialized models
};

export { dbInit, HotelModel, UserModel, RoomModel };
