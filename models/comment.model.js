const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "posts" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  content: String,
  createDate: { type: Date, default: Date.now() },
});
const commentModel = mongoose.model("comments", commentSchema);
module.exports = { commentModel, commentSchema };
