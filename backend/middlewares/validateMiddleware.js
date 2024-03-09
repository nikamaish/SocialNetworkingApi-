const { body, validationResult } = require('express-validator');

// Custom validation middleware for User model
const validateMiddleware = (req, res, next) => {
 
  const validationRules = [
    body('username').notEmpty().isString(),
    body('password').optional().isString(), // Optional for updates
    body('bio').optional().isString().isLength({ max: 150 }), // Optional for updates, with maxlength constraint
    body('profilePictureUrl').optional().isString().isURL(), // Optional for updates, assuming pictureUrl should be a valid URL
    body('textContent').notEmpty().isString(),
    body('follower').isMongoId(), // Assuming follower is a valid ObjectId
    body('following').isMongoId(), // Assuming following is a valid ObjectId
    body('followUserId').isMongoId(),
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
