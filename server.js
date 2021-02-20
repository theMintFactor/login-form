const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const app = express();

const port = process.env.PORT || 3000;

const router = require("./router");

app.set("view engine", "ejs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/login", router);

app.get("/", (req, res) => {
  res.render("index", { title: "Login Systems" });
});

app.listen(port, () => {
  console.log(`Listening to server on http://localhost:${port}`);
});
