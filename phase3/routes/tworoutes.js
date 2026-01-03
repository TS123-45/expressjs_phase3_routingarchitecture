const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/two.html"));
});

router.get("/someword2/info", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/twoinfo.html"));
});

router.get("/someword2/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/twocreate.html"));
});

router.get("/someword2/delete", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/twodelete.html"));
});

module.exports = router;