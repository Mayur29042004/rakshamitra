import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PoliceService from './pages/PoliceService';
import AmbulanceService from './pages/AmbulanceService';
import FireBrigadeService from './pages/FireBrigadeService';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/police" element={<PoliceService />} />
        <Route path="/ambulance" element={<AmbulanceService />} />
        <Route path="/fire" element={<FireBrigadeService />} />
      </Routes>
    </Router>
  );
}

export default App;
