import prisma from "../postgres/postgres.js";



export const createRoom = async (req, res, next) => {
  try {
    const { title, price, maxPeople, desc, hotelId } = req.body;

    // Ensure hotelId is provided and exists
    if (!hotelId) {
      return res.status(400).json({ error: "hotelId is required" });
    }

    // Create a new room and associate it with the existing hotel by hotelId
    const newRoom = await prisma.rooms.create({
      data: {
        title,
        price,
        maxPeople,
        desc,
        hotel: {
          connect: {
            id: hotelId,  // Connect the room to the hotel by its ID
          },
        },
      },
    });

    res.status(201).json(newRoom); // Return the newly created room
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const allRooms = await prisma.rooms.findMany();
    
    // Transform roomNumbers from JSON string to JavaScript array
    const formattedRooms = allRooms.map(room => ({
      ...room,
      roomNumbers: JSON.parse(room.roomNumbers)
    }));
    
    res.status(200).json(formattedRooms);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const roomId = parseInt(req.params.id);
    
    // Handle roomNumbers JSON parsing if needed
    let data = req.body;
    if (typeof data.roomNumbers === 'object') {
      data.roomNumbers = JSON.stringify(data.roomNumbers);
    }
    
    const updatedRoom = await prisma.rooms.update({
      where: { id: roomId },
      data: data,
    });
    
    // Parse roomNumbers for response
    updatedRoom.roomNumbers = JSON.parse(updatedRoom.roomNumbers);
    
    res.status(200).json(updatedRoom);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Room not found' });
    }
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const roomId = parseInt(req.params.id);

    // Delete room directly and handle not found error in catch block
    await prisma.rooms.delete({
      where: { id: roomId },
    });

    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Room not found' });
    }
    next(error);
  }
};