const express = require("express");
const {
  commentFindAll,
  commentUpdateOne,
  commentAddOne,
} = require("../controllers/comment.controller");

commentRouter = express.Router();
commentRouter.get("/", commentFindAll);
commentRouter.put("/:id", commentUpdateOne);
commentRouter.post("/", commentAddOne);
module.exports = { commentRouter };
