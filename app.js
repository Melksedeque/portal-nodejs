const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");
});

app.listen(3000, () => {
  console.log("Server is running with Express on port 3000");
});
