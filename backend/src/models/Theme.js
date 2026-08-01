const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  primaryColor: { type: String, default: '#000000' },
  accentColor: { type: String, default: '#ffffff' },
  backgroundColor: { type: String, default: '#fafafa' },
  glassIntensity: { type: Number, default: 0.5 },
  typography: { type: String, default: 'Inter' },
  animationSpeed: { type: String, enum: ['slow', 'normal', 'fast'], default: 'normal' },
  cursorStyle: { type: String, enum: ['default', 'custom1', 'custom2'], default: 'default' },
  particleDensity: { type: Number, default: 50 },
  heroLayout: { type: String, enum: ['center', 'left', 'right'], default: 'center' },
  mode: { type: String, enum: ['light', 'dark', 'system'], default: 'system' }
}, { timestamps: true });

module.exports = mongoose.model('Theme', themeSchema);
