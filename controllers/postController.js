// controllers/postController.js

const Post = require('../models/Post');
const upload = require('../middleware/fileUpload');

// Example: Create Post
exports.createPost = upload.array('media', 5), async (req, res) => {
  // Implement your post creation logic using the Post model
  try {
    // Create post in the database

    res.json({ msg: 'Post created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Edit Post
exports.editPost = async (req, res) => {
  // Implement your post editing logic using the Post model
  try {
    // Update post in the database
    // ...

    res.json({ msg: 'Post updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Delete Post
exports.deletePost = async (req, res) => {
  // Implement your post deletion logic using the Post model
  try {
    // Delete post from the database
    // ...

    res.json({ msg: 'Post deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Show All Posts Randomly
exports.showAllRandomly = async (req, res) => {
  try {
    // Fetch all posts from the database
    const allPosts = await Post.find();

    // Shuffle the array randomly
    const shuffledPosts = shuffleArray(allPosts);

    res.json(shuffledPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Helper function to shuffle an array
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}