const express = require('express');
const router = express.Router();

router.post('/request', (req, res) => {
  const { location, symptoms, doctorSlip } = req.body;
  // Simulate AI Seva response
  const suggestion = "Please lie down and avoid moving. Ambulance will be dispatched.";
  res.json({ suggestion });
});

module.exports = router;
