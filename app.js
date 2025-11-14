if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// BOOK MY BITE PROJECT //
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const method_override = require("method-override");
const port = 8080;
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const restrauntRouter = require("./routers/restraunts.js");
const reviewsRouter = require("./routers/reviews.js");
const userRouter = require("./routers/users.js");
const searchRouter = require("./routers/search.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const MongoStore = require("connect-mongo");

// Default Middlewares //
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(method_override("_method"));
app.engine("ejs", ejsMate);
app.use(express.json());

// Connecting Mongoose DataBase //

const atlasDbUrl = process.env.CLOUD_DB_URL;

database()
  .then(() => {
    console.log("Book-My-Bite Connected Successfully.");
  })
  .catch((err) => console.log(err));

async function database() {
  await mongoose.connect(atlasDbUrl);
}

// Sessions , Flash messages , MongoStore and Passport //

const cloudStore = MongoStore.create({
  mongoUrl: atlasDbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

cloudStore.on("error", (err) => {
  console.log("Error in Mongo session store", err);
});

const sessionOptions = {
  store: cloudStore,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// All the Session , flash , passport middlewares //
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Local Messages and Cuurrent session user middlewares //

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Routers Objects //
app.use("/restraunts", restrauntRouter);
app.use("/restraunts/:id/review", reviewsRouter);
app.use("/", userRouter);
app.use("/", searchRouter);

// ABOUT AND PRIVACY SECTION //
app.get("/about", (req, res) => {
  res.render("restraunts/about.ejs");
});

app.get("/privacy", (req, res) => {
  res.render("restraunts/privacy.ejs");
});
// Error Handling Middleware //
app.use((err, req, res, next) => {
  let { status = 400, message = "Error Occured!" } = err;
  res.status(status).render("error.ejs", { message }); // render err.ejs is pending..
});

// Main Server //
app.listen(port, () => {
  console.log("BOOK MY BITE CONNECTED SUCCESSFULLY !!");
});
