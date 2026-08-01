const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  cgpa: {
    type: String
  },
  timeline: {
    startDate: Date,
    endDate: Date, // Can be null if currently studying
    current: {
      type: Boolean,
      default: false
    }
  },
  description: {
    type: String
  },
  logo: {
    url: String,
    alt: String
  },
  displayOrder: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);
