// Router Object For Users //
const express = require("express");
const router = express.Router();
const { saveRedirectUrl } = require("../utils/middlewares.js");
// const User = require("../models/user.js");
const wrapAsync = require("../extras/wrapAsync.js");
const passport = require("passport");
const userController = require("../controllers/usersCon.js");

// USER //

router.post("/signup", wrapAsync(userController.signUp));

// Login Post Route //

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.logIn)
);

// Logout Route //
router.get("/logout", userController.logOut);

// Get Route for signup and login //
router.get("/signup", (req, res) => {
  res.render("users/SignUp.ejs");
});

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// Exporting the Router object //
module.exports = router;
