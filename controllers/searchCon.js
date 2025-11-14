// MVC FOR FILTERATION SEARCH //
const Restraunt = require("../models/restraunts.js");

// Controllers //
module.exports.categoryBox = async (req, res) => {
  let { category } = req.params;
  let filteredRestraunts = await Restraunt.find({ category: category });
  res.render("restraunts/category.ejs", { filteredRestraunts, category });
};

module.exports.searchFeild = async (req, res) => {
  let result = (req.body.q || "").trim();
  if (!result) {
    req.flash("error", "Please search something");
    return res.redirect("/restraunts");
  }
  let regex = new RegExp(result, "i");
  let filteredRestraunts = await Restraunt.find({
    $or: [
      { title: { $regex: regex } },
      { location: { $regex: regex } },
      { country: { $regex: regex } },
      { category: { $regex: regex } },
    ],
  });
  res.render("restraunts/category.ejs", { filteredRestraunts });
};
