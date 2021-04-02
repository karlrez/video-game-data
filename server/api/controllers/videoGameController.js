const mongoose = require("mongoose");
const Schema = require("./../models/videoGameModel");
const VideoGame = mongoose.model("VideoGames", Schema.videoGameSchema);
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllData = async (req, res) => {
  // Pagination Info
  const totalResults = 1770; //TODO: Make this dynamic
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 100;
  const hasNextPage = page * limit >= totalResults ? false : true;
  const pageNum = req.query.page || 1;
  const totalPages = Math.ceil(totalResults / limit);

  try {
    // Execute query
    const features = new APIFeatures(VideoGame.find(), req.query)
      .sort()
      .limitFields()
      .paginate();
    const videoGames = await features.query;

    // Send response
    res.status(200).json({
      status: "success",
      results: videoGames.length,
      totalResults: totalResults,
      page: page,
      totalPages: totalPages,
      hasNextPage: hasNextPage,
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
