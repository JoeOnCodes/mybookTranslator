require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// إعداد التطبيق
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (وسائط) لتحليل البيانات والتعامل مع CORS
app.use(bodyParser.json());
app.use(cors());
const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

// الاتصال بـ MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// نقطة نهاية تجريبية
app.get('/', (req, res) => {
  res.send('Welcome to the Book Translation API');
});
// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
