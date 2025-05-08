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
    const { city, min, max, limit, featured } = req.query;
    console.log(req.query)

    const filters = {
      ...(city && {
        city: {
          equals: city.trim(),
          mode: "insensitive",
        },
      }),
      ...(featured !== undefined && { featured: featured === "true" }),
    };

    const parsedMin = parseInt(min);
    const parsedMax = parseInt(max);

    if (!isNaN(parsedMin) || !isNaN(parsedMax)) {
      filters.cheapestPrice = {
        ...(parsedMin >= 0 && { gte: parsedMin }),
        ...(parsedMax >= 0 && { lte: parsedMax }),
      };
    }

    const hotels = await prisma.hotels.findMany({
      where: filters,
      take: limit ? parseInt(limit) : undefined,
      include: { rooms: true },
    });

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
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

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await prisma.hotels.count({ where: { type: "hotel" } });
    const apartmentCount = await prisma.hotels.count({ where: { type: "apartment" } });
    const resortCount = await prisma.hotels.count({ where: { type: "resort" } });
    const villaCount = await prisma.hotels.count({ where: { type: "villa" } });
    const cabinCount = await prisma.hotels.count({ where: { type: "cabin" } });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};