const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  university: String,
  major: String,
  social: String,
  description: String,
});
const profileModel = mongoose.model("profiles", profileSchema);
module.exports = { profileSchema, profileModel };
