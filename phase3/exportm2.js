const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Sample Home");
});

router.get("/about", (req, res) => {
  res.send("Sample About");
});

function helperFunction() {
  console.log("Helper function executed");
}

exports.router = router;
exports.helperFunction = helperFunction;
