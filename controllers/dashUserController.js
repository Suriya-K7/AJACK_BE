const DashUser = require("../models/dashUserModel");

const { generateToken, getTokenFrom, sendMail } = require("../utils/helper");

const viewUser = async (req, res) => {
  try {
    const user = await DashUser.find();

    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const viewUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await DashUser.findById(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, department, id } = req.body;

    if (!firstName || !lastName || !email || !department || !id) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newDashUser = await DashUser.create({
      firstName,
      lastName,
      email,
      department,
      id,
    });

    return res
      .status(200)
      .json({ message: "User added successfully", data: newDashUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { firstName, lastName, email, department, id: dashUserId } = req.body;

    if (!firstName || !lastName || !email || !department || !dashUserId) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const matchedData = await DashUser.findById(id);

    if (!matchedData) {
      return res.status(400).json({ message: "User data not found" });
    }

    const dashUser = await DashUser.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      department,
      id: dashUserId,
    });

    const updatedUser = await DashUser.findById(id);

    return res
      .status(200)
      .json({ message: "User data updated successfully", data: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const matchedUserData = await DashUser.findById(id);

    if (!matchedUserData) {
      return res.status(400).json({ message: "User data not found" });
    }

    await DashUser.findByIdAndDelete(id);

    return res.status(200).json({ message: "User data deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  viewUser,
  viewUserById,
};
