const express = require("express");

const app = express();

const { router, helperFunction } = require("./routes/destructingimportroutes");

app.use("/sample", router);

app.use((req, res) => {
  helperFunction();
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});