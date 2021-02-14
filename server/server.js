var session = require("express-session");
var flash = require("connect-flash");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Storing secrets in config.env file
dotenv.config({ path: "./config.env" });

const app = require("./app");

const express = require("express");

// Constants
const PORT = process.env.PORT || 5000; // when deployed we want heroku port
const HOST = process.env.HOST;
const DATABASE =
  "mongodb+srv://karlrez:<PASSWORD>@cluster0.qdxzy.mongodb.net/video-game-data?retryWrites=true&w=majority";
const DATABASE_LOCAL = "mongodb://localhost:27017/video-game-data";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

// const DB = process.env.DATABASE_LOCAL; // local db
const DB = DATABASE.replace("<PASSWORD>", DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });

// Models
require("./api/models/videoGameModel");

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
