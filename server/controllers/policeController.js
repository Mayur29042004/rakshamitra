// controllers/policeController.js
const submitFraudReport = (req, res) => {
  const { name, phone, fraudType, description } = req.body;
  // Save to database or just log for now
  console.log("Fraud Report Received:", req.body);
  res.status(200).json({ message: "Fraud report submitted successfully" });
};

const submitAnonymousTip = (req, res) => {
  const { tip } = req.body;
  console.log("Anonymous Tip:", tip);
  res.status(200).json({ message: "Tip submitted anonymously" });
};

const trackSafety = (req, res) => {
  const { userLocation } = req.body;
  console.log("Tracking location:", userLocation);
  res.status(200).json({ message: "User location received" });
};

module.exports = {
  submitFraudReport,
  submitAnonymousTip,
  trackSafety,
};