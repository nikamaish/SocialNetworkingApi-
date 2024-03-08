// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create
// router.post('/profiles', userController.createProfile);

// View
router.get('/profiles/:userId', userController.viewProfile);

// Update
router.put('/profiles/:userId', userController.updateProfile);

// Delete
router.delete('/profiles/:userId', userController.deleteProfile);

module.exports = router;
