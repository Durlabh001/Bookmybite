// User Model //
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// User Schema //

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// Connecting Passport-local-mongoose to user schema //
userSchema.plugin(passportLocalMongoose);

// User Model //

const User = mongoose.model("User", userSchema);

module.exports = User;

// ----------------------------- //
