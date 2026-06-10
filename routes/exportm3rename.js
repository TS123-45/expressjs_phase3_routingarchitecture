const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Rename Export B Home");
});

function logMessage() {
  console.log("Log Message B executed");
}

module.exports = {
  serviceRouter: router,
  logger: logMessage, 
};
