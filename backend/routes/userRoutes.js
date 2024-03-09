// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const followRoutes = require('./followRoutes'); // Import the new follow routes

const router = express.Router();

// Create
// router.post('/profiles', userController.createProfile);

// View
router.get('/profiles/:userId', userController.viewProfile);

// Update
router.put('/profiles/:userId', userController.updateProfile);

// Delete
router.delete('/profiles/:userId', userController.deleteProfile);


// router.get('/following', authMiddleware.middleware, userController.getFollowingList);

// // Get the list of users who are following the authenticated user
// router.get('/followers', authMiddleware.middleware, userController.getFollowersList);

// // Include the follow routes
// router.use('/follow', followRoutes);

module.exports = router;
