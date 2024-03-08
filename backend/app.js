// app.js
const express = require('express');
const dotenv = require('dotenv');
const db = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
// dotenv.config();
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
