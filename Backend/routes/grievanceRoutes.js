const express = require("express");
const Grievance = require("../models/Grievance");

const router = express.Router();

router.post("/", async (req, res) => {
  const grievance = new Grievance(req.body);
  await grievance.save();
  res.status(201).json({ message: "Grievance submitted" });
});

module.exports = router;
