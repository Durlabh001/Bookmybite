// MVC FOR REVIEWS //
const Restraunt = require("../models/restraunts.js");
const Review = require("../models/reviews.js");

// Controllers //

module.exports.delete = async (req, res) => {
  let { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Restraunt.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Review is deleted successfully.");
  res.redirect(`/restraunts/${id}`);
};

module.exports.create = async (req, res) => {
  let { id } = req.params;
  let { rating, comment } = req.body;
  let restraunt = await Restraunt.findById(id);

  let newReview = new Review({
    comment: comment,
    rating: rating,
  });
  newReview.author = req.user._id;
  await newReview.save();
  restraunt.reviews.push(newReview);
  await restraunt.save();
  req.flash("success", "Review is added successfully.");
  res.redirect(`/restraunts/${id}`);
};
