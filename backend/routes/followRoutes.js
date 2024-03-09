// routes/followRoutes.js
const express = require('express');
const { validationResult } = require('express-validator');
const followController = require('../controllers/followController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateMiddleware = require('../middlewares/validateMiddleware');

const router = express.Router();

// Follow a user
router.post('/follow', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
     followController.followUser(req, res, next);
    });

// Unfollow a user
router.post('/unfollow', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
     followController.unfollowUser(req, res, next);
    });


router.get('/following', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
     followController.getFollowingList(req, res, next);
    });

// Define the route for retrieving the list of users following a given user
router.get('/followers', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
     followController.getFollowersList(req, res, next);
    });

module.exports = router;
