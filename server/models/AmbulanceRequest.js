const mongoose = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  symptoms: String,
  slipUrl: String,
  location: {
    latitude: String,
    longitude: String
  },
  aiSuggestion: String,
  confirmed: Boolean,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AmbulanceRequest', ambulanceSchema);