// controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Example: Signup
exports.signup = async (req, res) => {
  // Implement your signup logic using the User model
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

// Example: Login
exports.login = async (req, res) => {
  // Implement your login logic using the User model
  try {
    // Find user in the database

    // Generate JWT token
    const payload = {
      user: {
        id: user._id,
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

// Example: Get logged-in user
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
