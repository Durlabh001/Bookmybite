// MVC FOR USERS //
const User = require("../models/user.js");

// Controllers //

module.exports.signUp = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;

    let newUser = new User({
      username: username,
      email: email,
    });

    await User.register(newUser, password);

    req.logIn(newUser, (err) => {
      if (err) {
        return next(err);
      } else {
        req.flash("success", "Welcome to BookMyBite");
        res.redirect("/restraunts");
      }
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

module.exports.logIn = async (req, res) => {
  req.flash("success", "Welcome to BookMyBite");
  let redirectUrl = res.locals.redirectUrl || "/restraunts";
  res.redirect(redirectUrl);
};

module.exports.logOut = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    } else {
      req.flash("success", "Logout Successfully");
      res.redirect("/restraunts");
    }
  });
};
