const express = require("express");
const { likeUpdateOne } = require("../controllers/like.controller");

likeRouter = express.Router();
likeRouter.put("/:postId", likeUpdateOne);
module.exports = { likeRouter };
