// routes/posts.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// Define your post-related routes (create, edit, delete, show all)
router.post('/create', authMiddleware, postController.createPost);
router.put('/edit/:postId', authMiddleware, postController.editPost);
router.delete('/delete/:postId', authMiddleware, postController.deletePost);
router.get('/showAllRandomly', postController.showAllRandomly);

module.exports = router;
