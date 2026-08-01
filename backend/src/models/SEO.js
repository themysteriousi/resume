const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  keywords: [{ type: String }],
  openGraph: {
    title: String,
    description: String,
    image: String
  },
  twitterCards: {
    title: String,
    description: String,
    image: String
  },
  faviconUrl: { type: String },
  robotsTxt: { type: String },
  sitemapXml: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('SEO', seoSchema);
