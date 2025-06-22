const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fireRoutes = require('./routes/fire');
app.use('/api/fire', fireRoutes);
const ambulanceRoutes = require('./routes/ambulance');
app.use('/api/ambulance', ambulanceRoutes);
const policeRoutes = require('./routes/police');
app.use('/api/police', policeRoutes);
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});