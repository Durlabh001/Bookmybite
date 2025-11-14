// Search Filter Route //

const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../extras/wrapAsync.js");
// const Restraunt = require("../models/restraunts.js");
const searchController = require("../controllers/searchCon.js");

// Router Object //

// Category Filterration //

router.post("/search", wrapAsync(searchController.searchFeild));

router.get("/category/:category", wrapAsync(searchController.categoryBox));

// Exporting the Router object //
module.exports = router;
