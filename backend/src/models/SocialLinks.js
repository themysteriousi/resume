const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema({
  github: { type: String },
  linkedin: { type: String },
  twitter: { type: String },
  leetcode: { type: String },
  kaggle: { type: String },
  huggingFace: { type: String },
  medium: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('SocialLinks', socialLinksSchema);
