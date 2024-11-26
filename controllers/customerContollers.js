const Customer = require("../models/customerModel");

const { generateToken, getTokenFrom, sendMail } = require("../utils/helper");

const addCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, department, id } = req.body;

    if (!firstName || !lastName || !email || !department || !id) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const customer = await Customer.create({
      firstName,
      lastName,
      email,
      department,
      id,
    });

    return res.status(200).json({ message: "Customer added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    const { firstName, lastName, email, department, id: customerId } = req.body;

    if (!firstName || !lastName || !email || !department || !customerId) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const matchedData = await Customer.findById(id);

    if (!matchedData) {
      return res.status(400).json({ message: "User data not found" });
    }

    const customer = await Customer.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      department,
      id: customerId,
    });

    return res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    const matchedUserData = await Customer.findById(id);

    if (!matchedUserData) {
      return res.status(400).json({ message: "User data not found" });
    }

    await Customer.findByIdAndDelete(id);

    return res.status(200).json({ message: "User data deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const viewUser = async (req, res) => {
  try {
    const user = await Customer.find();

    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const viewUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await Customer.findById(id);

    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCustomer,
  updateCustomer,
  deleteCustomer,
  viewUser,
  viewUserById,
};
