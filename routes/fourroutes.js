const express = require("express");
const path = require("path");

const router = express.Router();

// /someword1/someword2/someword3/someword4
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/four.html"));
});

// /someword1/someword2/someword3/someword4/view
router.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/fourview.html"));
});

// /someword1/someword2/someword3/someword4/logs
router.get("/logs", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/fourlogs.html"));
});

// /someword1/someword2/someword3/someword4/analyse
router.get("/analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/fouranalyse.html"));
});

module.exports = router;