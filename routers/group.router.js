const express = require("express");
const {
  groupAddOne,
  groupUpdateOne,
} = require("../controllers/group.controller");

const groupRouter = express.Router();

groupRouter.post("/", groupAddOne);
groupRouter.put("/", groupUpdateOne);

module.exports = {
  groupRouter,
};
