// Importing the Router module from Express
const authRoute = require("express").Router();

// Importing required controllers for authentication-related operations
const {
  registerUser, // Controller for registering a new user
  confirmUser, // Controller for confirming a user
  loginUser, // Controller for user login
  forgotPassword, // Controller for handling forgotten passwords
  resetPassword, // Controller for resetting a password
} = require("../controllers/userControllers");

/**
 * Route to handle user registration
 * POST request to "/auth/register" triggers the registerUser controller
 */
authRoute.post("/auth/register", registerUser);

/**
 * Route to handle user confirmation
 * PATCH request to "/auth/confirm/:id" triggers the confirmUser controller
 */
authRoute.patch("/auth/confirm/:id", confirmUser);

/**
 * Route to handle user login
 * POST request to "/auth/login" triggers the loginUser controller
 */
authRoute.post("/auth/login", loginUser);

/**
 * Route to handle forgotten password requests
 * PUT request to "/auth/forgotPassword" triggers the forgotPassword controller
 */
authRoute.put("/auth/forgotPassword", forgotPassword);

/**
 * Route to handle password reset requests
 * PATCH request to "/auth/resetPassword/:resetToken" triggers the resetPassword controller
 */
authRoute.patch("/auth/resetPassword/:resetToken", resetPassword);

// Exporting the authRoute module to be used in other parts of the application
module.exports = authRoute;
