require("dotenv").config();

const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const JWT_SECRET = process.env.JWT_SECRET;
const BEURL = process.env.BEURL;
const FRONTEND_URL = process.env.FRONTEND_URL;

module.exports = {
  ATLAS_URI,
  PORT,
  EMAIL_PASS,
  EMAIL_USER,
  JWT_SECRET,
  BEURL,
  FRONTEND_URL,
};
