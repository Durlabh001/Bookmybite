// Router object for restraunt listings //
const express = require("express");
const router = express.Router();
// const Restraunt = require("../models/restraunts");
const wrapAsync = require("../extras/wrapAsync.js");
const { restrauntSchema } = require("../utils/validations.js");
const ExpressError = require("../extras/expressError.js");
const { isLoggedIn } = require("../utils/middlewares.js");
const { isOwner } = require("../utils/middlewares.js");
const multer = require("multer");
const { storage } = require("../cloudinaryConfig.js");
const upload = multer({ storage });
const restrauntController = require("../controllers/restrauntsCon.js");

// VALIDATIONS CHECK VIA JOI //

const validateRestraunt = (req, res, next) => {
  let { error } = restrauntSchema.validate(req.body);
  if (error) {
    let errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

// ALL THE ROUTES //

// Delete Restraunt Route //
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(restrauntController.delete)
);

// Edit Restraunt Route //
router.patch(
  "/:id",
  isLoggedIn,
  upload.single("image"),
  isOwner,
  validateRestraunt,
  wrapAsync(restrauntController.edit)
);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(restrauntController.editForm)
);

// New form for Restraunt Add //
router.get("/new", isLoggedIn, (req, res) => {
  res.render("restraunts/new.ejs");
});

// Show Route for Restraunts //
router.get("/:id", wrapAsync(restrauntController.show));

// Create New Listing , ( Add Restraunt ) Route //
router.post(
  "/",
  isLoggedIn,
  upload.single("image"),
  validateRestraunt,
  wrapAsync(restrauntController.create)
);

// Index Main Restraunts Route //
router.get("/", restrauntController.index);

// Exporting the router object //

module.exports = router;
