const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  phone: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/, // Indian mobile number pattern
  },

  aadhar: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{12}$/, // Aadhar 12-digit pattern
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);