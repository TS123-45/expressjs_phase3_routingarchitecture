const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/home.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

module.exports = router;