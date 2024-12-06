const express = require('express');
const Book = require('../models/book');

const router = express.Router();

// إضافة كتاب جديد
router.post('/add', async (req, res) => {
  const { title, content, language } = req.body;

  if (!title || !content || !language) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newBook = new Book({ title, content, language });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add book', details: err.message });
  }
});

module.exports = router;
