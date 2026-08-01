const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  issuer: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  image: {
    url: String,
    alt: String
  },
  pdf: {
    url: String
  },
  verificationLink: {
    type: String
  },
  displayOrder: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
