import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ambulance = () => {
  const [symptoms, setSymptoms] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [file, setFile] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [requestId, setRequestId] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLocation({
        latitude: pos.coords.latitude.toString(),
        longitude: pos.coords.longitude.toString()
      });
    });
  }, []);

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = e => {
      setSymptoms(e.results[0][0].transcript);
    };
    recognition.start();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('symptoms', symptoms);
    formData.append('slip', file);
    formData.append('location', JSON.stringify(location));

    const res = await axios.post('http://localhost:5000/api/ambulance/request', formData, {
      headers: {
        'Authorization': token,
        'Content-Type': 'multipart/form-data'
      }
    });

    setSuggestion(res.data.aiSuggestion);
    setRequestId(res.data.requestId);
  };

  const confirmDispatch = async () => {
  const token = localStorage.getItem('token');
  await axios.post(
    'http://localhost:5000/api/ambulance/confirm/${requestId}', // ✅ Use backticks
    {}, // body is empty
    {
      headers: {
        Authorization: token,
      },
    }
  );
  alert('Ambulance dispatched!');
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ambulance Request (AI Seva)</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder="Describe symptoms"></textarea>
      <button type="button" onClick={handleVoiceInput}>🎤 Voice Input</button><br />
      <button type="submit">Get AI Suggestions</button>

      {suggestion && (
        <div>
          <p><strong>AI Seva Suggestion:</strong> {suggestion}</p>
          <button onClick={confirmDispatch}>Confirm Ambulance Dispatch</button>
        </div>
      )}
    </form>
  );
};

export default Ambulance;