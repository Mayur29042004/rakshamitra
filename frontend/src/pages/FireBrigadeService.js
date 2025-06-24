import React, { useState } from 'react';
import axios from 'axios';

export default function FireService() {
  const [location, setLocation] = useState('');
  const [cause, setCause] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/fire/alert', { location, cause });
    alert(res.data.msg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fire Service Alert</h2>
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="Cause (e.g. fire, collapse)" value={cause} onChange={(e) => setCause(e.target.value)} />
      <button type="submit">Send Alert</button>
    </form>
  );
}
