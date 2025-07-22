const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const policeRoutes = require('./routes/policeRoutes');
const ambulanceRoutes = require('./routes/ambulance.routes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use('/api/fire', require('./routes/fireRoutes'));
app.use('/api/ambulance', require('./routes/ambulanceRoutes'));
app.use('/uploads', express.static('uploads'));
app.use('/api/police', policeRoutes);
app.use('/api/ambulance', ambulanceRoutes);