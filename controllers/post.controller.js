const { postModel } = require("../models/post.model");

// Find post by userId
const postFindOne = (req, res) => {
  postModel
    .find()
    .populate("userId", "username -_id")
    .then((result) => res.send(result))
    .catch(console.log);
};

// Create one
const postAddOne = (req, res) => {
  const data = req.body;
  const newPost = new postModel(data);
  newPost.save();
  res.send("Create succesfully");
};

// Update one
const postUpdateOne = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  postModel
    .findByIdAndUpdate(id, { $set: data })
    .then(res.send("Update successfully"))
    .catch(console.log);
};

module.exports = {
  postFindOne,
  postUpdateOne,
  postAddOne,
};
