const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { name, email, phone, aadhaar, password } = req.body;
  const existing = await User.findOne({ aadhaar });
  if (existing) return res.status(400).json({ msg: 'User exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, phone, aadhaar, password: hashed });
  await user.save();
  res.json({ msg: 'User Registered Successfully!' });
});

module.exports = router;