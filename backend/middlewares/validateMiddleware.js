const { body, validationResult } = require('express-validator');

// Custom validation middleware for User model
const validateMiddleware = (req, res, next) => {
 
  const validationRules = [
    body('username').notEmpty().isString().isLength({ min: 3, max: 20 }),
    body('password').notEmpty().isString().isLength({ min: 5}),
    
    body('bio').optional().isString().isLength({ max: 150 }), // Optional for updates, with maxlength constraint
    body('profilePictureUrl').optional().isString().isURL(), // Optional for updates, assuming pictureUrl should be a valid URL
    body('textContent').optional().notEmpty().isString(),
    body('follower').optional().isMongoId(), // Assuming follower is a valid ObjectId
    body('following').optional().isMongoId(), // Assuming following is a valid ObjectId
    body('followUserId').optional().isMongoId(),
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
