// config/cloudinary.js

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djeb94ndn",
  api_key: "211596887543841",
  api_secret: "-Q7TrfZmDZ3CPuNiDcMGhkpjLUw",
});

module.exports = cloudinary;
