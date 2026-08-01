const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  techStack: [{
    type: String
  }],
  githubLink: {
    type: String
  },
  liveDemoLink: {
    type: String
  },
  images: [{
    url: String,
    alt: String
  }],
  videos: [{
    url: String,
    title: String
  }],
  architectureDiagram: {
    url: String,
    alt: String
  },
  features: [{
    type: String
  }],
  challenges: {
    type: String
  },
  futureScope: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  displayOrder: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
