const express = require("express");

const app = express();

const {router: sampleRouter,helperFunction: runHelper} = require("./routes/destructingimportroutes");

app.use("/sample", sampleRouter);

app.use((req, res) => {
  runHelper();
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});