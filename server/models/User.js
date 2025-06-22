const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  aadhaar: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);