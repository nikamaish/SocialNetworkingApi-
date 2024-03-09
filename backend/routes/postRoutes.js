const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.middleware, postController.createPost);

router.get('/user', authMiddleware.middleware, postController.viewUserPosts);

router.put('/:postId', authMiddleware.middleware, postController.updatePost);

router.delete('/:postId', authMiddleware.middleware, postController.deletePost);

router.get('/latest', authMiddleware.middleware, postController.getLatestPostsFromFollowedUsers);

module.exports = router;
