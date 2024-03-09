const { body, validationResult } = require('express-validator');

// Custom validation middleware for User model
const validateMiddleware = (req, res, next) => {
  // Add your validation rules for each field
  const validationRules = [
    body('username').notEmpty().isString(),
    body('password').optional().isString(), // Optional for updates
    body('bio').optional().isString().isLength({ max: 150 }), // Optional for updates, with maxlength constraint
    body('profilePictureUrl').optional().isString().isURL(), // Optional for updates, assuming pictureUrl should be a valid URL
    // Add more validation rules for other fields
  ];

  // Run validation
  Promise.all(validationRules.map(validation => validation.run(req)))
    .then(() => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Validation passed, proceed to the next middleware or route
      next();
    })
    .catch(next); // Handle promise rejections
};

module.exports = validateMiddleware;
