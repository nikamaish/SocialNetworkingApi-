// routes/followRoutes.js
const express = require('express');
const followController = require('../controllers/followController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Follow a user
router.post('/follow', authMiddleware.middleware, followController.followUser);

// Unfollow a user
router.post('/unfollow', authMiddleware.middleware, followController.unfollowUser);


router.get('/following', authMiddleware.middleware, followController.getFollowingList);

// Define the route for retrieving the list of users following a given user
router.get('/followers', authMiddleware.middleware, followController.getFollowersList);

module.exports = router;
