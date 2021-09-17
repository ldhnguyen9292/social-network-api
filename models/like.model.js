const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});
const likeModel = mongoose.model("likes", likeSchema);
module.exports = { likeSchema, likeModel };
