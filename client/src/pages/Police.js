// client/src/pages/Police.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Police = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [fraudType, setFraudType] = useState('');
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        'http://localhost:5000/api/police/reportFraud',
        { name, phone, fraudType, description },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Corrected template literal
          },
        }
      );
      alert('Fraud reported!');
    } catch (error) {
      console.error('Error reporting fraud:', error);
      alert('Error reporting fraud');
    }
  };

  const handleTipSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post(
        'http://localhost:5000/api/police/submitTip',
        { tip },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Tip submitted anonymously!');
    } catch (error) {
      console.error('Error submitting tip:', error);
      alert('Error submitting tip');
    }
  };

  return (
    <div>
      <h2>1. Report Fraud</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Fraud Type"
          value={fraudType}
          onChange={(e) => setFraudType(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Fraud Report</button>
      </form>

      <hr />

      <h2>2. Submit Anonymous Tip</h2>
      <form onSubmit={handleTipSubmit}>
        <textarea
          placeholder="Your Tip"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Tip</button>
      </form>
    </div>
  );
};

export default Police;