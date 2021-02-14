const mongoose = require("mongoose");
const Schema = require("./../models/videoGameModel");
const VideoGame = mongoose.model("VideoGames", Schema.videoGameSchema);

exports.getAllData = async function (req, res) {
  try {
    await VideoGame.find({}, function (err, data) {
      if (err) {
        return res.status(500).json({
          status: "fail",
          error: err,
        });
      }
      res.status(200).json({
        status: "success",
        requestedAt: req.requestTime,
        results: data.length,
        data: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleRecord = async function (req, res) {
  try {
    await VideoGame.findById(req.params.id, function (err, data) {
      if (err) {
        return res.status(404).json({
          status: "fail",
          error: err,
        });
      }
      res.status(200).json({
        status: "success",
        requestedAt: req.requestTime,
        data: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
