const express = require('express');
const router = express.Router();

// Fraud Reporting
router.post('/fraud', (req, res) => {
  const { bankDetails, evidence } = req.body;
  res.json({ msg: "Fraud report submitted. FIR and account freeze requested." });
});

// Anonymous Tip
router.post('/tip', (req, res) => {
  const { info, evidence } = req.body;
  const tipId = "TIP" + Date.now();
  res.json({ msg: "Tip submitted", id: tipId });
});

// Human Tracker
router.post('/tracker', (req, res) => {
  const { vehiclePlate, destinationETA, aadhaar } = req.body;
  res.json({ msg: "Tracking initiated", checkTime: "10 hours from now" });
});

module.exports = router;
