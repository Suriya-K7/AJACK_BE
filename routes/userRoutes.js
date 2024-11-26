// Importing the Router module from Express
const userRoute = require("express").Router();

// Importing required controllers for customer-related operations
const {
  viewUser, // Controller for viewing all users
  viewUserById, // Controller for viewing a user by ID
  addCustomer, // Controller for adding a new customer
  deleteCustomer, // Controller for deleting a customer
  updateCustomer, // Controller for updating customer details
} = require("../controllers/customerContollers");

/**
 * Route to handle viewing all users
 * GET request to "/users" triggers the viewUser controller
 */
userRoute.get("/users", viewUser);

/**
 * Route to handle viewing a user by ID
 * GET request to "/users/:id" triggers the viewUserById controller
 */
userRoute.get("/users/:id", viewUserById);
/**
 * Route to handle adding a new customer
 * POST request to "/users" triggers the addCustomer controller
 */
userRoute.post("/users", addCustomer);

/**
 * Route to handle updating an existing customer's details
 * PATCH request to "/users" triggers the updateCustomer controller
 */
userRoute.patch("/users/:id", updateCustomer);

/**
 * Route to handle deleting a customer
 * DELETE request to "/users" triggers the deleteCustomer controller
 */
userRoute.delete("/users/:id", deleteCustomer);

// Exporting the userRoute module to be used in other parts of the application
module.exports = userRoute;
