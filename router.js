var express = require("express");
var router = express.Router();

const credential = {
  email: "admin@gmail.com",
  password: "admin",
};

router.post("/", (req, res) => {
  if (
    req.body.email == credential.email &&
    req.body.password == credential.password
  ) {
    req.session.user = req.body.email;
    res.redirect("login/dashboard");
  } else {
    res.end("Invalid Username");
  }
});

router.get("/dashboard", (res, req) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("unauthorized User");
  }
});

module.exports = router;
