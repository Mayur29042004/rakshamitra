// routes/policeRoutes.js
const express = require("express");
const router = express.Router();
const { submitFraudReport, submitAnonymousTip, trackSafety } = require("../controllers/policeController");
const verifyToken = require("../middleware/auth");

// All routes require auth
router.post("/fraud", verifyToken, submitFraudReport);
router.post("/tip", verifyToken, submitAnonymousTip);
router.post("/safety", verifyToken, trackSafety);

module.exports = router;