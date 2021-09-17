const mongoose = require("mongoose");
const { profileSchema } = require("./profile.model");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  name: { type: String, require: true },
  dateOfBirth: { type: Date, require: true },
  registerDate: { type: Date, default: Date.now() },
  groupId: { type: [mongoose.Schema.Types.ObjectId], ref: "groups" },
  profile: { type: [profileSchema] },
});
const userModel = mongoose.model("users", userSchema);
module.exports = { userModel, userSchema };
