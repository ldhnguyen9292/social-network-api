const { userModel } = require("../models/user.model");
const { groupModel } = require("./../models/group.model");

// Create one
const groupAddOne = (req, res) => {
  const data = req.body;
  const newGroup = new groupModel(data);
  newGroup.save();
  res.send(newGroup);
};

// Update one
const groupUpdateOne = (req, res) => {
  const data = req.body;
  if (!data) res.send("Nhập body");
  groupModel
    .findById(data.groupId)
    .then((v) => {
      if (!v) return res.send("Group doesnot exist");
      index = v.userId.findIndex((user) => user.equals(data.userId));
      if (!index) console.log("User exist");
      else {
        console.log("update user");
        v.userId.push(data.userId);
        v.save();
      }
      return userModel.findById(data.userId);
    })
    .then((v) => {
      if (!v) return res.send("User doesnot exist");
      index = v.groupId.findIndex((group) => group.equals(data.groupId));
      if (!index) console.log("Group exist");
      else {
        v.groupId.push(data.groupId);
        v.save();
      }
      return res.send("Update succesful");
    })
    .catch(console.log);
};

module.exports = {
  groupUpdateOne,
  groupAddOne,
};
