const express = require('express');
const router = express.Router();
const FireIncident = require('../models/FireIncident');
const jwt = require('jsonwebtoken');

// Middleware to verify token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

router.post('/report', authMiddleware, async (req, res) => {
  const { type, location } = req.body;
  const userId = req.user.id;

  const incident = new FireIncident({ type, location, userId });
  await incident.save();

  console.log(`🚨 Alert sent to nearby fire station for ${type}`);
  res.status(201).json({ message: 'Fire incident reported. Help is on the way.' });
});

module.exports = router;