const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("base", { title: "Login Systems" });
});

app.listen(port, () => {
  console.log(`Listening to server on http://localhost:${port}`);
});
