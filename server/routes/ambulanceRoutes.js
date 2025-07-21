const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const AmbulanceRequest = require('../models/AmbulanceRequest');

// Middleware for auth
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// AI Seva: Simple rule-based logic
function getAISuggestions(symptoms) {
  const s = symptoms.toLowerCase();
  if (s.includes('chest') || s.includes('breath')) return 'Lie down and stay calm. Avoid physical activity.';
  if (s.includes('fever')) return 'Drink fluids. Monitor temperature.';
  if (s.includes('bleeding')) return 'Apply pressure and seek help.';
  return 'Stay calm and wait for medical support.';
}

// Upload form + get AI suggestion
router.post('/request', authMiddleware, upload.single('slip'), async (req, res) => {
  const { symptoms, location } = req.body;
  const slipUrl = req.file ? req.file.path : '';
  const aiSuggestion = getAISuggestions(symptoms);

  const request = new AmbulanceRequest({
    userId: req.user.id,
    symptoms,
    location: JSON.parse(location),
    slipUrl,
    aiSuggestion,
    confirmed: false
  });

  await request.save();
  res.status(200).json({ aiSuggestion, requestId: request._id });
});

// Confirm dispatch
router.post('/confirm/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  await AmbulanceRequest.findByIdAndUpdate(id, { confirmed: true });
  console.log('🚑 Ambulance dispatched!');
  res.json({ message: 'Ambulance dispatched successfully.' });
});

module.exports = router;