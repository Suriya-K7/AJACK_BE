// Importing the Router module from Express
const userRoute = require("express").Router();

// Importing required controllers for dashboard-user-related operations
const {
  viewUser, // Controller for viewing all users
  viewUserById, // Controller for viewing a user by ID
  addUser, // Controller for adding a new dashboard user
  deleteUser, // Controller for deleting a dashboard user
  updateUser, // Controller for updating dashboard user details
} = require("../controllers/dashUserController");

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
 * Route to handle adding a new dashboard user
 * POST request to "/users" triggers the adddashboard user controller
 */
userRoute.post("/users", addUser);

/**
 * Route to handle updating an existing dashboard user's details
 * PATCH request to "/users" triggers the updatedashboard user controller
 */
userRoute.patch("/users/:id", updateUser);

/**
 * Route to handle deleting a dashboard user
 * DELETE request to "/users" triggers the deletedashboard user controller
 */
userRoute.delete("/users/:id", deleteUser);

// Exporting the userRoute module to be used in other parts of the application
module.exports = userRoute;
