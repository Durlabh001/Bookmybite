// Protecting Middlewares //
const Restraunt = require("../models/restraunts.js");
const Review = require("../models/reviews.js");

// Login Check //
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "Please Login To Continue");
    res.redirect("/login");
  } else {
    next();
  }
};

// Saving Url in locals //
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

// Checking Owner Of Restraunt //
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let restraunt = await Restraunt.findById(id);
  if (restraunt.owner.equals(res.locals.currUser._id)) {
    next();
  } else {
    req.flash("error", "You are not the owner of this restraunt.");
    res.redirect("/restraunts");
  }
};

// Checking the Author of Restraunt //
module.exports.isAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (review.author.equals(res.locals.currUser._id)) {
    next();
  } else {
    req.flash("error", "You are not the owner of this review.");
    res.redirect(`/restraunts/${id}`);
  }
};
