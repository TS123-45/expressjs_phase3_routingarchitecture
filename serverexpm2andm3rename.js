const express = require("express");

const app = express();

const { apiRouter, runHelper } = require("./routes/exportm2rename");
const { serviceRouter, logger } = require("./routes/exportm3rename");

runHelper();
logger();

app.use("/a", apiRouter);
app.use("/b", serviceRouter);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
