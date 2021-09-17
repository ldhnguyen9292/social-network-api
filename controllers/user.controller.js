const { userModel } = require("../models/user.model");

// Find all
const userFindAll = (req, res) => {
  // const data = await userModel.find().exec();
  userModel
    .find()
    .then((data) => res.send(data))
    .catch(console.log);
};

// Find one
const userFindOne = (req, res) => {
  const id = req.params.id;
  userModel
    .findById(id)
    .then((data) => res.send(data))
    .catch(console.log);
};

// Create one
const userAddOne = (req, res) => {
  const data = req.body;
  const newUser = new userModel(data);
  newUser.save();
  res.send(newUser);
};

// Remove one
const userRemoveOne = (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete(id)
    .then(res.send(`Remove ${id} successfully`))
    .catch(console.log);
};

// Update one
const userUpdateOne = (req, res) => {
  const newData = req.body;
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(id, newData)
    .then(res.send("Update successfully"))
    .catch(console.log);
};

module.exports = {
  userFindAll,
  userFindOne,
  userRemoveOne,
  userUpdateOne,
  userAddOne,
};
