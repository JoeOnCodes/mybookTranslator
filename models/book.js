const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  translatedContent: { type: String },
  language: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
