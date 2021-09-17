const express = require("express");
const {
  postFindOne,
  postAddOne,
  postUpdateOne,
} = require("../controllers/post.controller");

const postRouter = express.Router();
postRouter.get("/", postFindOne);
postRouter.post("/", postAddOne);
postRouter.put("/:id", postUpdateOne);

module.exports = {
  postRouter,
};
