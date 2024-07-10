const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Create a new news
router.post('/', async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).send(news);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).send(news);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
