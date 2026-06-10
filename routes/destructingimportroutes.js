const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Sample Home Route");
});

router.get("/about", (req, res) => {
  res.send("Sample About Route");
});

function helperFunction() {
  console.log("Helper function called");
}

module.exports = {
  router,
  helperFunction,
};