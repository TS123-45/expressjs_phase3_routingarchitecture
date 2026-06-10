const express = require("express");

const app = express();

const { router, logMessage } = require("./routes/exportm3");

logMessage();
app.use("/sample", router);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
