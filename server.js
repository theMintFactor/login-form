const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

// load static assets
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Login Systems" });
});

app.listen(port, () => {
  console.log(`Listening to server on http://localhost:${port}`);
});
