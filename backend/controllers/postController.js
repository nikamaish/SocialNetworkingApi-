// controllers/userController.js
const User = require('../models/User');
const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
      const { textContent } = req.body;
      const userId = req.user.id; // Assuming you have user information in the request
  
      const newPost = await Post.create({
        textContent,
        user: userId,
      });
  
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
const viewUserPosts = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user information in the request

    const userPosts = await Post.find({ user: userId });

    res.status(200).json(userPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { textContent } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { textContent },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    await Post.findByIdAndDelete(postId);

    res.status(204).end(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPost,
  viewUserPosts,
  updatePost,
  deletePost,
};
