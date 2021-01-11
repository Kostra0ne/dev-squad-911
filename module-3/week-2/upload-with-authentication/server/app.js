require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, // Allow origins to send cookies.
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      //When the session cookie has an expiration date, connect-mongo will use it.
      //   ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 14 * 24 * 60 * 60 }, // = 14 days
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(req.session.currentUser);
  next();
});

app.use("/api/auth", require("./routes/auth"));

module.exports = app;
