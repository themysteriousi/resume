const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  bio: { type: String, required: true },
  shortBio: { type: String },
  profileImage: { type: String },
  hobbies: [{ type: String }],
  stats: [{
    label: String,
    value: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('About', aboutSchema);
