import { dbInit } from "../postgres/postgres.js";

const userModelInit = async () => {
  const { UserModel } = await dbInit(); // Ensure the UserModel is initialized
  return UserModel;
};

export const createUser = async (req, res, next) => {
  try {
    const UserModel = await userModelInit();
    const newHotel = await UserModel.create(req.body);
    res.status(200).json(newHotel);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const UserModel = await userModelInit();
    const allUsers = await UserModel.findAll();
    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({ error: "No hotels found" });
    }
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const UserModel = await userModelInit();
    const UserId = req.params.id;

    const [updatedRows, updatedUsers] = await UserModel.update(req.body, {
      where: { id: UserId },
      returning: true,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUsers[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const UserModel = await userModelInit();
    const userId = req.params.id;

    const user = await UserModel.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
