// controllers/followController.js
const Follow = require('../models/Follow');
const User = require('../models/User');

const followUser = async (req, res) => {
  try {
    const { followUserId } = req.body;
    const followerId = req.user.id;

    // Check if the user to be followed exists
    const followUser = await User.findById(followUserId);
    if (!followUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the follow relationship already exists
    const existingFollow = await Follow.findOne({ follower: followerId, following: followUserId });
    if (existingFollow) {
      return res.status(400).json({ error: 'User already followed' });
    }

    // Create a new follow relationship
    await Follow.create({
      follower: followerId,
      following: followUserId,
    });

    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const unfollowUser = async (req, res) => {
  try {
    const { unfollowUserId } = req.body;
    const followerId = req.user.id;

    // Check if the user to be unfollowed exists
    const unfollowUser = await User.findById(unfollowUserId);
    if (!unfollowUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the follow relationship exists
    const existingFollow = await Follow.findOne({ follower: followerId, following: unfollowUserId });
    if (!existingFollow) {
      return res.status(400).json({ error: 'User not followed' });
    }

    // Remove the follow relationship
    await existingFollow.remove();

    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  followUser,
  unfollowUser,
};
