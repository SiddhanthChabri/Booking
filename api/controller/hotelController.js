import prisma from "../postgres/postgres.js";

export const createHotel = async (req, res, next) => {
  try {
    const newHotel = await prisma.hotels.create({
      data: {
        name: req.body.name,
        type: req.body.type,
        city: req.body.city,
        address: req.body.address,
        distance: req.body.distance,
        photos: req.body.photos, 
        title: req.body.title,
        desc: req.body.desc,
        rating: req.body.rating,
        cheapestPrice: req.body.cheapestPrice,
        featured: req.body.featured,
      },
    });
    res.status(201).json(newHotel);
  } catch (error) {
    next(error);
  }
};


export const getHotels = async (req, res, next) => {
  try {
    const allHotels = await prisma.hotels.findMany();
    
    // Format JSON fields for all hotels
    const formattedHotels = allHotels.map(hotel => ({
      ...hotel,
      photos: JSON.parse(hotel.photos || "[]"),
      rooms: JSON.parse(hotel.rooms || "[]")
    }));
    
    res.status(200).json(formattedHotels);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const hotelId = parseInt(req.params.id);
    
    // Handle JSON fields properly
    let data = req.body;
    if (typeof data.photos === 'object') {
      data.photos = JSON.stringify(data.photos);
    }
    if (typeof data.rooms === 'object') {
      data.rooms = JSON.stringify(data.rooms);
    }

    const updatedHotel = await prisma.hotels.update({
      where: { id: hotelId },
      data: data,
    });
    
    // Parse JSON fields for response
    updatedHotel.photos = JSON.parse(updatedHotel.photos || "[]");
    updatedHotel.rooms = JSON.parse(updatedHotel.rooms || "[]");

    res.status(200).json(updatedHotel);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Hotel not found" });
    }
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const hotelId = parseInt(req.params.id);

    await prisma.hotels.delete({
      where: { id: hotelId },
    });

    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Hotel not found" });
    }
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  try {
    if (!req.query.cities) {
      return res.status(400).json({ error: "Cities parameter is required" });
    }
    
    const cities = req.query.cities.split(",");
    
    const counts = await Promise.all(
      cities.map(city =>
        prisma.hotels.count({
          where: { city },
        })
      )
    );
    
    // Return as object with city names as keys for better usability
    const result = cities.map((city, index) => ({
      city,
      count: counts[index]
    }));
    
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};