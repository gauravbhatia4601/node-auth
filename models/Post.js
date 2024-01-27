// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  caption: String,
  images: [String],
  videos: [String],
  updates: String,
  postViews: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);
