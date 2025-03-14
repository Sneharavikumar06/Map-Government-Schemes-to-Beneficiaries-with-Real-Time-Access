const mongoose = require("mongoose");

const GrievanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  complaint: { type: String, required: true },
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Grievance", GrievanceSchema);
