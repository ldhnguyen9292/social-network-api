const { profileModel } = require("../models/profile.model");
const { userModel } = require("../models/user.model");

// Create one
const profileAddOne = (req, res) => {
  const userId = req.params.userId;
  const data = req.body;
  const newProfile = new profileModel(data);
  userModel
    .findById(userId)
    .then((user) => {
      if (!user) res.send("User does not exist!");
      user.profile.push(newProfile);
      user.save();
      res.send(user);
    })
    .catch(console.log);
};

// Update one
const profileUpdateOne = (req, res) => {
  const userId = req.params.userId;
  const data = req.body;
  userModel
    .findById(userId)
    .then((user) => {
      if (!user) res.send("User does not exist");
      const index = user.profile.findIndex((profile) => {
        return profile._id.equals(data._id);
      });
      if (!index) {
        user.profile[index] = data;
        user.save();
        res.send("Update successfully");
      } else res.send("Update fail");
    })
    .catch(console.log);
};

module.exports = {
  profileUpdateOne,
  profileAddOne,
};
