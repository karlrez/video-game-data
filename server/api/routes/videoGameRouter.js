const express = require("express");
const controller = require("./../controllers/videoGameController");
const AppError = require("./../utils/appError");

const router = express.Router();

// Routes
router.get("/data", controller.getAllData);
router.get("/data/:id", controller.getSingleRecord);

// For wrong route
router.get("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = router;
