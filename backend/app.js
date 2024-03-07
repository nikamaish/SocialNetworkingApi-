// app.js
const express = require('express');
const dotenv = require('dotenv');
const db = require('./utils/db');
// const authMiddleware = require('./middlewares/authMiddleware');
// const userRoutes = require('./routes/userRoutes');
// const postRoutes = require('./routes/postRoutes');
// const followRoutes = require('./routes/followRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
// app.use(authMiddleware);

// Routes
// app.use('/users', userRoutes);
// app.use('/posts', postRoutes);
// app.use('/follows', followRoutes);

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
