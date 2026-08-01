const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  public_id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true
  },
  format: String,
  width: Number,
  height: Number,
  size: Number
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);
