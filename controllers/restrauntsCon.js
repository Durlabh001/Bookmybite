// MVC FOR RESTRAUNT LISTINGS //
const Restraunt = require("../models/restraunts");

module.exports.delete = async (req, res) => {
  let { id } = req.params;
  await Restraunt.findByIdAndDelete(id);
  req.flash("error", "Restraunt Deleted Successfully.");
  res.redirect("/restraunts");
};

module.exports.edit = async (req, res) => {
  let { id } = req.params;
  let { title, description, price, location, country, category } = req.body;

  let newRestraunt = await Restraunt.findByIdAndUpdate(id, {
    title: title,
    description: description,
    price: price,
    location: location,
    country: country,
    category: category,
  });

  newRestraunt.image = {
    url: req.file.path,
    filename: req.file.filename,
  };

  await newRestraunt.save();
  req.flash("success", "Restraunt Edited Successfully.");
  res.redirect(`/restraunts/${id}`);
};

module.exports.editForm = async (req, res) => {
  let { id } = req.params;
  let restraunt = await Restraunt.findById(id);
  res.render("restraunts/edit.ejs", { restraunt });
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  let restraunt = await Restraunt.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");
  res.render("restraunts/show.ejs", { restraunt });
};

module.exports.create = async (req, res) => {
  let { title, description, price, location, country, category } = req.body;

  let newRestraunt = new Restraunt({
    title,
    description,
    price,
    location,
    country,
    category,
  });
  newRestraunt.owner = req.user._id;
  newRestraunt.image = {
    url: req.file.path,
    filename: req.file.filename,
  };
  await newRestraunt.save();
  req.flash("success", "Restraunt Added Successfully.");
  res.redirect("/restraunts");
};

module.exports.index = async (req, res) => {
  let restraunts = await Restraunt.find();
  res.render("restraunts/index.ejs", { restraunts });
};
