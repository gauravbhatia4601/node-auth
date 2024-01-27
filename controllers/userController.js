// controllers/userController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/fileUpload');

// Example: Create User
exports.createUser = async (req, res) => {
  // Implement your user creation logic using the User model
  try {
    // Create user in the database

    // Generate JWT token
    const payload = {
      user: {
        id: newUser._id,
      },
    };

    jwt.sign(payload, 'your_jwt_secret', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Edit User
exports.editUser = async (req, res) => {
  // Implement your user editing logic using the User model
  try {
    // Update user in the database
    // ...

    res.json({ msg: 'User updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Delete User
exports.deleteUser = async (req, res) => {
  // Implement your user deletion logic using the User model
  try {
    // Delete user from the database
    // ...

    res.json({ msg: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Search Users
exports.searchUsers = async (req, res) => {
  try {
    const { query } = req.query;

    // Implement your search logic using the User model
    const users = await User.find({
      $or: [
        { username: { $regex: query, $options: 'i' } }, // Case-insensitive username search
        { fullName: { $regex: query, $options: 'i' } }, // Case-insensitive full name search
      ],
    });

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: Follow User
exports.followUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Implement your follow logic using the User model
    // Make sure to handle authentication using req.user if needed

    res.json({ msg: `You are now following user with ID ${userId}` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: List Random Users
exports.listRandomUsers = async (req, res) => {
  try {
    // Implement your logic to fetch random users using the User model
    const randomUsers = await User.aggregate([{ $sample: { size: 5 } }]);

    res.json(randomUsers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Example: List Users By Phone Number
exports.listUsersByPhoneNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    // Implement your logic to fetch users by phone number using the User model
    const users = await User.find({ phoneNumber });

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


