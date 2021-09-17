const express = require("express");
const { commentRouter } = require("./comment.router");
const { groupRouter } = require("./group.router");
const { likeRouter } = require("./like.router");
const { postRouter } = require("./post.router");
const { profileRouter } = require("./profile.router");
const { userRouter } = require("./user.router");
const rootRouters = express.Router();

rootRouters.use("/user", userRouter);
rootRouters.use("/profile", profileRouter);
rootRouters.use("/group", groupRouter);
rootRouters.use("/post", postRouter);
rootRouters.use("/like", likeRouter);
rootRouters.use("/comment", commentRouter);

module.exports = { rootRouters };
