const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dcbiegm4s", 
  api_key: "", 
  api_secret: "", 
});

module.exports = cloudinary;