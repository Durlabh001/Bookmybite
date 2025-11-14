//JOI Validations //

// Validation Check for Restraunts //

const Joi = require("joi");

module.exports.restrauntSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().min(20).max(130).required(),
  price: Joi.number().min(0).required(),
  location: Joi.string().required(),
  country: Joi.string().required(),
  category: Joi.string().required(),
});

// Validation Check for Reviews //

module.exports.reviewSchema = Joi.object({
  comment: Joi.string().trim().required().min(1).max(100),
  rating: Joi.number().required().min(1).max(5),
});
