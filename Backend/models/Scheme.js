const mongoose = require("mongoose");

const SchemeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  eligibleOccupations: [String],
});

module.exports = mongoose.model("Scheme", SchemeSchema);
