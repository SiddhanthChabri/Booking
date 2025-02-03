import { dbInit } from "../postgres/postgres.js";

const hotelModelInit = async () => {
  const { HotelModel } = await dbInit(); // Ensure the HotelModel is initialized
  return HotelModel;
};

export const createHotel = async (req, res, next) => {
  try {
    const HotelModel = await hotelModelInit();
    const newHotel = await HotelModel.create(req.body);
    res.status(200).json(newHotel);
  } catch (error) {
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const HotelModel = await hotelModelInit();
    const allHotels = await HotelModel.findAll();
    if (!allHotels || allHotels.length === 0) {
      return res.status(404).json({ error: "No hotels found" });
    }
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const HotelModel = await hotelModelInit();
    const hotelId = req.params.id;

    const [updatedRows, updatedHotels] = await HotelModel.update(req.body, {
      where: { id: hotelId },
      returning: true,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: "Hotel not found" });
    }
    res.status(200).json(updatedHotels[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const HotelModel = await hotelModelInit();
    const hotelId = req.params.id;

    const hotel = await HotelModel.findOne({ where: { id: hotelId } });
    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    await hotel.destroy();
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};


export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const Hotel = await hotelModelInit();
    const list = await Promise.all(
      cities.map(city => Hotel.countDocuments({ city }))
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
