// routes/followRoutes.js
const express = require('express');
const followController = require('../controllers/followController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Follow a user
router.post('/follow', authMiddleware.middleware, followController.followUser);

// Unfollow a user
router.post('/unfollow', authMiddleware.middleware, followController.unfollowUser);

module.exports = router;
