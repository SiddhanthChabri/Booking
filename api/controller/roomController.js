import { dbInit } from "../postgres/postgres.js";

const roomModelInit = async () => {
    const { RoomModel } = await dbInit(); // Ensure the RoomlModel is initialized
    return RoomModel;
  };

  export const createRoom = async (req, res, next) => {
    try {
      const RoomModel = await roomModelInit();
      const newRoom = await RoomModel.create(req.body);
      res.status(200).json(newRoom);
    } catch (error) {
      next(error);
    }
  };
  

  export const getRooms = async (req, res, next) => {
    try {
      const RoomModel = await RoomModelInit();
      const allRooms = await RoomModel.findAll();
      if (!allRooms || allRooms.length === 0) {
        return res.status(404).json({ error: "No Rooms found" });
      }
      res.status(200).json(allRooms);
    } catch (error) {
      next(error);
    }
  };

export const updateRoom = async (req, res, next) => {
  try {
    const RoomModel = await hotelModelInit();
    const roomId = req.params.id;

    const [updatedRows, updatedRooms] = await RoomModel.update(req.body, {
      where: { id: roomId },
      returning: true,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.status(200).json(updatedRooms[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const RoomModel = await RoomModelInit();
    const roomId = req.params.id;

    const room = await RoomModel.findOne({ where: { id: roomId } });
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    await room.destroy();
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};