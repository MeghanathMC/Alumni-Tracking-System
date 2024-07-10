const express = require("express");
const router = express.Router();
const Alumni = require("../models/Alumni"); // Adjust the path as necessary

router.post("/alumni-signup", async (req, res) => {
  const {
    name,
    email,
    password,
    graduationYear,
    expertise,
    currentRole,
    achievements,
  } = req.body;

  try {
    const newAlumni = new Alumni({
      name,
      email,
      password,
      graduationYear,
      expertise,
      currentRole,
      achievements,
    });

    await newAlumni.save();
    res.status(201).json(newAlumni);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
