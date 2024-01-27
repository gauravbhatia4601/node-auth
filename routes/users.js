// routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Define your user-related routes (create, edit, delete, show all, search, follow, list users)
router.post('/create', userController.createUser);
router.put('/edit/:userId', authMiddleware, userController.editUser);
router.delete('/delete/:userId', authMiddleware, userController.deleteUser);
// router.get('/showAllRandomly', userController.showAllRandomly);
router.get('/search', userController.searchUsers);
router.post('/follow/:userId', authMiddleware, userController.followUser);
router.get('/listRandomUsers', userController.listRandomUsers);
router.get('/listUsersByPhoneNumber/:phoneNumber', userController.listUsersByPhoneNumber);

module.exports = router;
