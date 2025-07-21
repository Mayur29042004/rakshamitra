import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FireHelp = () => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLocation({
        latitude: pos.coords.latitude.toString(),
        longitude: pos.coords.longitude.toString()
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/fire/report', {
        type,
        location
      }, {
        headers: { Authorization: token }
      });

      alert('🚒 Fire team notified!');
    } catch (err) {
      alert('Error reporting incident.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Emergency Type</label>
      <select onChange={(e) => setType(e.target.value)} required>
        <option value="">-- Select --</option>
        <option value="Fire">Fire</option>
        <option value="Building Collapse">Building Collapse</option>
        <option value="Explosion">Explosion</option>
      </select>
      <button type="submit">Send Alert</button>
    </form>
  );
};

export default FireHelp;