const express = require("express");
const router = express.Router();
const Alumni = require("../models/Alumni");
const alumniregistration = require("../controllers/alumniregistrationcontroller.js");

// Create a new alumni
router.post("/", async (req, res) => {
  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    res.status(201).send(alumni);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.route("api/alumni-signup").post(alumniregistration.initiatealumniregister);


router.route("api/alumni-completesignup").post(alumniregistration.completealumniregister);
// Get all alumni
router.get("/", async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).send(alumni);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
