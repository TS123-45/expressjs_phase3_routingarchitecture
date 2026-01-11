const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Route");
});

router.get("/contact", (req, res) => {
  res.send("Contact Route");
});

function logMessage() {
  console.log("Logging from routes file");
}

module.exports = {
  router,
  logMessage,
};