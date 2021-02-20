var express = require("express");
var router = express.Router();

const credential = {
  email: "admin@gmail.com",
  password: "admin",
};

router.post("/login", (req, res) => {
  if (
    req.body.email == credential.email &&
    req.body.password == credential.password
  ) {
    req.session.user = req.body.email;
    res.redirect("dashboard");
  } else {
    res.end("Invalid Username");
  }
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", {
      user: req.session.user,
      title: req.session.user,
    });
  } else {
    res.send("unauthorized User");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.render("index", { title: "Express", logout: "Logout Successfully" });
    }
  });
});

module.exports = router;
