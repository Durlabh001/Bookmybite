// Review Router //

const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../extras/wrapAsync.js");
// const Restraunt = require("../models/restraunts.js");
// const Review = require("../models/reviews.js");
const ExpressError = require("../extras/expressError.js");
const { reviewSchema } = require("../utils/validations.js");
const { isLoggedIn } = require("../utils/middlewares.js");
const { isAuthor } = require("../utils/middlewares.js");
const reviewController = require("../controllers/reviewsCon.js");

// Validations for Reviews //

const validateReviews = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMsg);
  } else {
    next();
  }
};

// Review Router Object //

// Delete Review Route //

router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.delete)
);

// Make Review Route //
router.post("/", validateReviews, wrapAsync(reviewController.create));

// Exporting the Router object //
module.exports = router;
