const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const { checkAuth } = require("../controllers/auth");
// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("creator");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new event (only for authenticated alumni or admin)
router.post("/", checkAuth, async (req, res) => {
  const { title, description, Image, date, time, isOnline, location } =
    req.body;
  const event = new Event({
    title,
    description,
    Image,
    date,
    time,
    isOnline,
    location: isOnline ? null : location,
    creator: req.user._id, // Assuming user is stored in req.user
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
