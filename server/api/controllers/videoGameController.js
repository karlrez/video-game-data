const mongoose = require("mongoose");
const Schema = require("./../models/videoGameModel");
const VideoGame = mongoose.model("VideoGames", Schema.videoGameSchema);
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllData = async (req, res) => {
  try {
    // Execute query
    const features = new APIFeatures(VideoGame.find(), req.query)
      .sort()
      .filter()
      .limitFields()
      .paginate();
    const videoGames = await features.query;

    // TODO: find way to make this a single query
    // Performing second query just to get value for totalResults
    const totalResultsQuery = new APIFeatures(VideoGame.find(), req.query)
      .filter()
      .limitFields("_id");
    const totalResults = await totalResultsQuery.query;

    // Pagination Info
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 100;

    // Send response
    res.status(200).json({
      status: "success",
      results: videoGames.length,
      totalResults: totalResults.length,
      page: page,
      totalPages: Math.ceil(totalResults.length / limit),
      hasNextPage: page * limit >= totalResults.length ? false : true,
      data: {
        videoGames,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSingleRecord = async (req, res) => {
  try {
    const videoGame = await VideoGame.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        videoGame,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
