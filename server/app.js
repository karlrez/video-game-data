const express = require("express");
const videoGameRouter = require("./api/routes/videoGameRouter");
var csv = require("fast-csv");
var fs = require("fs");
const AppError = require("./utils/appError");

const app = express();

// Middlewares
app.use((req, res, next) => {
  next(); // calls the next middleware in the stack, dont omit this
});

app.use(function (req, res, next) {
  // To enable CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Mounting our routers
app.use("/api/video-game-data", videoGameRouter);

// Index page for the app
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
