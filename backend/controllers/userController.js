// userController.js
// import User from '../models/User.js';

const User = require('../models/User');


// const createProfile = async (req, res) => {
//   try {
//     // Extract user details from the request body
//     const { username, bio, profilePictureUrl } = req.body;

//     // Omit the password field if it exists in the request body
//     const userProfileData = { username, bio, profilePictureUrl };

//     // Create a new user profile
//     const userProfile = await User.create(userProfileData);

//     res.status(201).json(userProfile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };




 const viewProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Retrieve the user profile
    const userProfile = await User.findById(userId);

    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

 const updateProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, bio, profilePictureUrl } = req.body;

    // Update the user profile
    const updatedUserProfile = await User.findByIdAndUpdate(
      userId,
      {
        username,
        bio,
        profilePictureUrl,
      },
      { new: true }
    );

    res.status(200).json(updatedUserProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

 const deleteProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Delete the user profile
    await User.findByIdAndDelete(userId);

    res.status(204).end(); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFollowingList = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get the user's following list
    const followingList = await Follow.find({ follower: userId }).populate('following', 'username');

    res.status(200).json({ followingList: followingList.map(follow => follow.following) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getFollowersList = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get the user's followers list
    const followersList = await Follow.find({ following: userId }).populate('follower', 'username');

    res.status(200).json({ followersList: followersList.map(follow => follow.follower) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  // createProfile,
  viewProfile,
  updateProfile,
  deleteProfile,

  getFollowingList,
  getFollowersList,
};