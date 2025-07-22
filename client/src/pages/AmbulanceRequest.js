import React, { useState } from 'react';
import axios from 'axios';

const AmbulanceRequest = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // JWT token stored during login

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", "John Doe");        // Replace with real user input later
    formData.append("location", "Mandya");

    try {
      const res = await axios.post("http://localhost:5000/api/ambulance/request", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      });
      alert("✅ Ambulance requested! Request ID: " + res.data.requestId);
    } catch (err) {
      alert("❌ Request failed: " + err.response?.data?.error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>🚑 Ambulance Request (AI Seva)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/,audio/"
          required
        /><br/><br/>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default AmbulanceRequest;