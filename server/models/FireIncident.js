const mongoose = require('mongoose');

const fireIncidentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: String,
  location: {
    latitude: String,
    longitude: String
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FireIncident', fireIncidentSchema);