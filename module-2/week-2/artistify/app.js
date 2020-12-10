require("dotenv").config();
require("./config/mongo");
require("./helpers/hbs"); // custom functions adding features to hbs templates

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const flash = require("connect-flash"); // designed to keep messages between 2 http request/response cycles
const hbs = require("hbs");
// https://www.npmjs.com/package/express-session
const session = require("express-session");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials")); // where are the tiny chunks of views ?

app.use(logger("dev"));
app.use(express.json()); // expose asynchronous posted data in req.body
app.use(express.urlencoded({ extended: false })); // same for synchronous posted data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
  })
);

// FLASH MESSAGES
// enable "flash messaging" system
// flash relies on the express-session mechanism
app.use(flash());


// CUSTOM MIDDLEWARES
// expose flash message to the hbs templates, if any flash-message is defined
app.use(require("./middlewares/exposeFlashMessage"));

// expose login status to the hbs templates
app.use(require("./middlewares/exposeLoginStatus"));

// connect routers
const indexRouter = require("./routes/index");
const artistRouter = require("./routes/artist");
const albumRouter = require("./routes/album");
const labelRouter = require("./routes/label");
const authouter = require("./routes/auth");
const styleRouter = require("./routes/api.style"); 


// use routers
app.use("/", indexRouter); // use routers
app.use("/dashboard/album", albumRouter); // use label router
app.use("/dashboard/artist", artistRouter); // use artist router
app.use("/dashboard/label", labelRouter); // use label router
app.use("/api/style", styleRouter); // use label router
app.use("/auth", authouter); // use label router

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

