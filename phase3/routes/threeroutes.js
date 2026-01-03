const express = require("express");
const path = require("path");

const router = express.Router();

// /someword1/someword2/someword3
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/three.html"));
});

// /someword1/someword2/someword3/details
router.get("/details", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/threedetails.html"));
});

// /someword1/someword2/someword3/reports
router.get("/reports", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/threereports.html"));
});

// /someword1/someword2/someword3/history
router.get("/history", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/threehistory.html"));
});

module.exports = router;