import React, { useState } from 'react';
import axios from 'axios';

export default function AmbulanceService() {
  const [location, setLocation] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [doctorSlip, setDoctorSlip] = useState('');
  const [advice, setAdvice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/ambulance/request', {
        location,
        symptoms,
        doctorSlip,
      });
      setAdvice(res.data.suggestion);
    } catch (err) {
      alert('Error sending ambulance request');
    }
  };

  return (
    <div>
      <h2>Ambulance Request Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          placeholder="Describe Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <input
          type="text"
          placeholder="Doctor Slip (URL or brief note)"
          value={doctorSlip}
          onChange={(e) => setDoctorSlip(e.target.value)}
        />
        <button type="submit">Request Ambulance</button>
      </form>
      {advice && <p><strong>AI Seva Advice:</strong> {advice}</p>}
    </div>
  );
}
