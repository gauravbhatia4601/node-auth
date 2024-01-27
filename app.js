const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/instagram';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((result) => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
}).catch(err => console.error(err))

const db = mongoose.connection;

// Event handlers for the Mongoose connection
db.on('connected', () => {
  console.log('Mongoose connected to:', mongoURI);
});

db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close the Mongoose connection when the Node process is terminated
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed through app termination');
    process.exit(0);
  });
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
