const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String },
  userId: { type: [mongoose.Schema.Types.ObjectId], ref: "users" },
});
const groupModel = mongoose.model("groups", groupSchema);
module.exports = { groupSchema, groupModel };
