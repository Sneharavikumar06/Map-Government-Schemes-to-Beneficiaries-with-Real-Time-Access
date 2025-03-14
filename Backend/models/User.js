const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhaar: { type: String, required: true, unique: true },
  income: { type: Number, required: true },
  occupation: { type: String, required: true },
  disability: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
