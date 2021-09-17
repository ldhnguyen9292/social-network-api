const { postModel } = require("../models/post.model");
const { likeModel } = require("../models/like.model");

// Update one
const likeUpdateOne = (req, res) => {
  const postId = req.params.postId;
  const data = req.body;
  postModel
    .findById(postId)
    .then((post) => {
      if (!post) return res.send("Post doesnot exist");
      const index = post.likes.findIndex((v) => {
        return v.userId.equals(data.userId);
      });
      if (index > -1) {
        post.likes.splice(index, 1);
        post.save();
        res.send("Dislike");
      } else {
        const newLike = new likeModel(data);
        post.likes.push(newLike);
        post.save();
        res.send("Like");
      }
    })
    .catch(console.log);
};

module.exports = {
  likeUpdateOne,
};
