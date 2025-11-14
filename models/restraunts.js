// Restraunts Model //
const mongoose = require("mongoose");
const Review = require("./reviews.js");
const Schema = mongoose.Schema;

// Main Model //

const restrauntSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Indian", "Italian", "Mexican", "Chinese", "Japanese"],
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review", // Review
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User", // User
  },
});

// Deleteion of all reviews while deleting listing //
restrauntSchema.post("findOneAndDelete", async (restraunt) => {
  if (restraunt && restraunt.reviews.length) {
    let result = await Review.deleteMany({ _id: { $in: restraunt.reviews } });
    console.log(result);
  }
});

// Restraunt Model //
const Restraunt = mongoose.model("Restraunt", restrauntSchema);

// Exports //
module.exports = Restraunt;
