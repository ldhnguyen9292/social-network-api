const express = require("express");
const {
  userFindAll,
  userFindOne,
  userAddOne,
  userRemoveOne,
  userUpdateOne,
} = require("../controllers/user.controller");

const userRouter = express.Router();

// Find all
userRouter.get("/", userFindAll);
// Find one
userRouter.get("/:id", userFindOne);
// Add one
userRouter.post("/", userAddOne);
// Remove one
userRouter.delete("/:id", userRemoveOne);
// Update one
userRouter.put("/:id", userUpdateOne);

module.exports = { userRouter };
