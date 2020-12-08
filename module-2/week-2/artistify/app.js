require("dotenv").config();
require("./config/mongo");
require("./helpers/hbs"); // custom functions adding features to hbs templates

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// connect routers
var indexRouter = require("./routes/index"); // require routers
var usersRouter = require("./routes/users"); // require routers
var artistRouter = require("./routes/artist"); // require routers
var albumRouter = require("./routes/album"); // require routers
var labelRouter = require("./routes/label"); // require routers

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json()); // expose asynchronous posted data in req.body
app.use(express.urlencoded({ extended: false })); // same for synchronous posted data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// use routers
app.use("/", indexRouter); // use routers
app.use("/users", usersRouter); // use routers
app.use("/dashboard/album", albumRouter); // use label router
app.use("/dashboard/artist", artistRouter); // use artist router
app.use("/dashboard/label", labelRouter); // use label router

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
