import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FireService from './pages/FireService';
import AmbulanceService from './pages/AmbulanceService';
import PoliceService from './pages/PoliceService';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fire" element={<FireService />} />
        <Route path="/ambulance" element={<AmbulanceService />} />
        <Route path="/police" element={<PoliceService />} />
      </Routes>
    </Router>
  );
}
