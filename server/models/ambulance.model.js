const mongoose = require("mongoose");

const ambulanceRequestSchema = new mongoose.Schema({
  name: String,
  location: String,
  fileUrl: String,
  status: {
    type: String,
    enum: ['Pending', 'Dispatched'],
    default: 'Pending',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });

module.exports = mongoose.model("AmbulanceRequest", ambulanceRequestSchema);