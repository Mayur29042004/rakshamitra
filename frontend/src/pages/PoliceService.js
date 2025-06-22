import React, { useState } from 'react';
import axios from 'axios';

export default function PoliceService() {
  const [fraud, setFraud] = useState({ bankDetails: '', evidence: '' });
  const [tip, setTip] = useState({ info: '', evidence: '' });
  const [tracker, setTracker] = useState({ vehiclePlate: '', destinationETA: '', aadhaar: '' });
  const [response, setResponse] = useState('');

  const handleFraud = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/police/fraud', fraud);
    setResponse(res.data.msg);
  };

  const handleTip = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/police/tip', tip);
    setResponse(`Anonymous Tip ID: ${res.data.id}`);
  };

  const handleTracker = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/police/tracker', tracker);
    setResponse(res.data.msg);
  };

  return (
    <div>
      <h2>Police Services</h2>

      <h3>1. Report Fraud</h3>
      <form onSubmit={handleFraud}>
        <input type="text" placeholder="Bank Details" value={fraud.bankDetails} onChange={(e) => setFraud({ ...fraud, bankDetails: e.target.value })} />
        <input type="text" placeholder="Upload Evidence" value={fraud.evidence} onChange={(e) => setFraud({ ...fraud, evidence: e.target.value })} />
        <button type="submit">Report Fraud</button>
      </form>

      <h3>2. Anonymous Tip</h3>
      <form onSubmit={handleTip}>
        <textarea placeholder="Case Details" value={tip.info} onChange={(e) => setTip({ ...tip, info: e.target.value })} />
        <input type="text" placeholder="Evidence Link" value={tip.evidence} onChange={(e) => setTip({ ...tip, evidence: e.target.value })} />
        <button type="submit">Submit Tip</button>
      </form>

      <h3>3. Human Tracker</h3>
      <form onSubmit={handleTracker}>
        <input type="text" placeholder="Vehicle Plate Number" value={tracker.vehiclePlate} onChange={(e) => setTracker({ ...tracker, vehiclePlate: e.target.value })} />
        <input type="text" placeholder="Destination ETA (e.g. 10:00 PM)" value={tracker.destinationETA} onChange={(e) => setTracker({ ...tracker, destinationETA: e.target.value })} />
        <input type="text" placeholder="Aadhaar Number" value={tracker.aadhaar} onChange={(e) => setTracker({ ...tracker, aadhaar: e.target.value })} />
        <button type="submit">Start Tracking</button>
      </form>

      {response && <p><strong>Response:</strong> {response}</p>}
    </div>
  );
}
