const express = require('express');
const router = express.Router();

router.post('/alert', (req, res) => {
  const { location, cause } = req.body;
  // Integrate with fire station API or simulate
  res.json({ msg: `Alert sent for ${cause} at ${location}` });
});

module.exports = router;
