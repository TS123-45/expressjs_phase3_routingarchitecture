const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Rename Export A Home");
});

function helperFunction() {
  console.log("Helper Function A called");
}

exports.apiRouter = router;
exports.runHelper = helperFunction; 
