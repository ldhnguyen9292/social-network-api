const mongoose = require("mongoose");
const { likeSchema } = require("./like.model");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  title: String,
  content: String,
  likes: { type: [likeSchema] },
  // comment thực hiện bucketing
  createDate: { type: Date, default: Date.now() },
});
const postModel = mongoose.model("posts", postSchema);
module.exports = { postModel, postSchema };
