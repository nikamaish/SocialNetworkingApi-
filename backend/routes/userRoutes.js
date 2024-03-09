const express = require('express');
const { validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateMiddleware = require('../middlewares/validateMiddleware'); // Import the validateMiddleware
const followRoutes = require('./followRoutes'); // Import the new follow routes

const router = express.Router();

// Create
// router.post('/profiles', userController.createProfile);

// View
router.get('/profiles/:userId', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
  userController.viewProfile(req, res, next);
});

// Update
router.put('/profiles/:userId', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
  userController.updateProfile(req, res, next);
});

// Delete
router.delete('/profiles/:userId', [authMiddleware.middleware, validateMiddleware], (req, res, next) => {
  userController.deleteProfile(req, res, next);
});

module.exports = router;
