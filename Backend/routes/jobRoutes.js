// backend/routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Route to create a new job
router.post("/jobs", async (req, res) => {
  const jobData = req.body;
  try {
    const newJob = new Job(jobData);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
