const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/two.html"));
});

router.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/twoinfo.html"));
});

router.get("/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/twocreate.html"));
});

router.get("/delete", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/twodelete.html"));
});

module.exports = router;