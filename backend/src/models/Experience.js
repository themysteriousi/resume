const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  timeline: {
    startDate: Date,
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    }
  },
  description: {
    type: String
  },
  technologies: [{
    type: String
  }],
  companyLogo: {
    url: String,
    alt: String
  },
  displayOrder: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
