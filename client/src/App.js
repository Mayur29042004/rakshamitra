import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import FireHelp from './pages/FireHelp';
import Ambulance from './pages/Ambulance';
import Police from './pages/Police';
import AmbulanceRequest from './pages/AmbulanceRequest';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/fire-help" element={<FireHelp />} />
  <Route path="/ambulance" element={<Ambulance />} />
  <Route path="/police" element={<Police />} />
  <Route path="/ambulance-request" element={<AmbulanceRequest />} />
</Routes>
    </Router>
  );
}

export default App;