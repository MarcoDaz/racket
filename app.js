const createError = require("http-errors");
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");

// import routers
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");
const sessionsRouter = require("./routes/sessions");
const productsRouter = require("./routes/products");
const adminRouter = require("./routes/admin");
const basketRouter = require("./routes/basket");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(methodOverride("_method"));

app.use(
  session({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect("/sessions/new");
  } else {
    next();
  }
};

const adminChecker = (req, res, next) => {
  if (req.session.user && req.session.user.admin) {
    next();
  } else {
    res.redirect("/")
  }
}

//app.use(expressLayouts);


// route setup
app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/sessions", sessionsRouter);
app.use("/products", productsRouter);
app.use("/admin", adminChecker, adminRouter);
app.use("/basket", basketRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;