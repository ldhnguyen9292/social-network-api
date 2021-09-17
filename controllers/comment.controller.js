const { commentModel } = require("../models/comment.model");

// Find all
const commentFindAll = (req, res) => {
  const id = req.params.id;
  commentModel
    .aggregate()
    .facet({
      result: [
        {
          $bucketAuto: {
            groupBy: "$postId",
            buckets: 100,
            output: {
              comments: { $push: { userId: "$userId", content: "$content" } },
            },
          },
        },
      ],
    })
    .then((result) => res.send(result))
    .catch(console.log);
};

// Create one
const commentAddOne = (req, res) => {
  const data = req.body;
  const newComment = new commentModel(data);
  newComment
    .save()
    .then((result) => res.send(result))
    .catch(console.log);
};

// Update one
const commentUpdateOne = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  commentModel
    .findByIdAndUpdate(id, data)
    .then((result) => {
      if (!result) return res.send("Comment not found");
      res.send(result);
    })
    .catch(console.log);
};

module.exports = {
  commentFindAll,
  commentUpdateOne,
  commentAddOne,
};
