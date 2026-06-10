const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// import routers
const homeRouter = require("./routes/homeroutes");
const twoRouter = require("./routes/tworoutes");
const threeRouter = require("./routes/threeroutes");
const fourRouter = require("./routes/fourroutes");

// Case 1
app.use("/", homeRouter);

// Case 2
app.use("/someword1/someword2", twoRouter);

// Case 3 
app.use("/someword1/someword2/someword3", threeRouter);

// Case 4
app.use("/someword1/someword2/someword3/someword4", fourRouter);

app.use((req, res) => {
  res.status(404).send("Page Not Found happy morning");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});