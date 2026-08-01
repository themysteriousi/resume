const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  subheadline: { type: String },
  animatedRoles: [{ type: String }],
  ctaButtons: [{
    label: String,
    url: String,
    style: String
  }],
  backgroundImage: { url: String },
  backgroundVideo: { url: String },
  splineSceneUrl: { type: String }, // e.g. .splinecode URL
  threeDModel: { url: String },
  particleDensity: { type: Number, default: 50 },
  lighting: { type: String },
  animationSpeed: { type: String, default: 'normal' }
}, { timestamps: true });

module.exports = mongoose.model('Hero', heroSchema);
