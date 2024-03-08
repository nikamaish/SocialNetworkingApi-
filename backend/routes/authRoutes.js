// routes/authRoutes.js
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', authMiddleware.signup);
router.post('/signin', authMiddleware.signin);

module.exports = router;
