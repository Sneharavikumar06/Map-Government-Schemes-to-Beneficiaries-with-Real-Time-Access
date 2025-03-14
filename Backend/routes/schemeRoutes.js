const express = require("express");
const Scheme = require("../models/Scheme");

const router = express.Router();

router.get("/", async (req, res) => {
  const schemes = await Scheme.find();
  res.json(schemes);
});

module.exports = router;
