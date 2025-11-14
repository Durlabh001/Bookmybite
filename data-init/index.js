// Data Insertion for Book My Bite //

const data = require("./data.js");
const mongoose = require("mongoose");
const Restraunt = require("../models/restraunts.js");

// Connecting Mongoose DataBase for Data Insertion //

database()
  .then(() => {
    console.log("Book-My-Bite Connected Successfully.");
  })
  .catch((err) => console.log(err));

async function database() {
  mongoose.connect("mongodb://127.0.0.1:27017/Bookmybite");
}

// Inserting Data //

async function addData() {
  try {
    await Restraunt.deleteMany({});
    let result = data.map((obj) => ({
      ...obj,
      owner: "6911b102e2341ce27b6848ae",
    }));
    await Restraunt.insertMany(result);
    console.log("DATA IS ADDED.");
  } catch (error) {
    console.log(error);
  }
}

addData(); // Inserted
