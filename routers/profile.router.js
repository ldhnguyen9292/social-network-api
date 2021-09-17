const express = require("express");
const {
  profileAddOne,
  profileUpdateOne,
} = require("../controllers/profile.controller");

const profileRouter = express.Router();
profileRouter.post("/:userId", profileAddOne);
profileRouter.put("/:userId", profileUpdateOne);

module.exports = { profileRouter };
