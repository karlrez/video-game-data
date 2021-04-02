const mongoose = require("mongoose");

const videoGameSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    Console: {
      type: String,
    },
    Title: {
      type: String,
    },
    ["US Sales (millions)"]: {
      type: String,
    },
    YearReleased: {
      type: String,
    },
    Publisher: {
      type: String,
    },
    Genre: {
      type: String,
    },
    Sequel: {
      type: String,
    },
    ["Re-release"]: {
      type: String,
    },
    UsedPrice: {
      type: String,
    },
    lnUsedPrice: {
      type: String,
    },
    ["Review Score"]: {
      type: String,
    },
    RatingE: {
      type: String,
    },
    RatingT: {
      type: String,
    },
    RatingM: {
      type: String,
    },
    MaxPlayers: {
      type: String,
    },
    Online: {
      type: String,
    },
    Licensed: {
      type: String,
    },
    Handheld: {
      type: String,
    },
    Accessory: {
      type: String,
    },
    LtdEdition: {
      type: String,
    },
    Multiplatform: {
      type: String,
    },
    GBA: {
      type: String,
    },
    GCN: {
      type: String,
    },
    NDS: {
      type: String,
    },
    Wii: {
      type: String,
    },
    PS2: {
      type: String,
    },
    PS3: {
      type: String,
    },
    PSP: {
      type: String,
    },
    Xbox: {
      type: String,
    },
    X360: {
      type: String,
    },
    Action: {
      type: String,
    },
    Adventure: {
      type: String,
    },
    Educational: {
      type: String,
    },
    Racing: {
      type: String,
    },
    RPG: {
      type: String,
    },
    Simulation: {
      type: String,
    },
    Sports: {
      type: String,
    },
    Strategy: {
      type: String,
    },
    _2K: {
      type: String,
    },
  },
  { collection: "game-data" } // Need to specify name for existing collection
);

module.exports = mongoose.model("VideoGames", videoGameSchema);
