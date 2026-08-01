const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String, // Markdown content
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  tags: [{
    type: String
  }],
  categories: [{
    type: String
  }],
  seo: {
    title: String,
    description: String,
    keywords: [String]
  },
  coverImage: {
    url: String,
    alt: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
