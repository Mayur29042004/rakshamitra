import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', aadhaar: '', password: '',
    location: { latitude: '', longitude: '' }
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setForm(prev => ({
        ...prev,
        location: {
          latitude: pos.coords.latitude.toString(),
          longitude: pos.coords.longitude.toString()
        }
      }));
    });
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/register', form);
    alert('Registered');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="phone" onChange={handleChange} placeholder="Phone" />
      <input name="aadhaar" onChange={handleChange} placeholder="Aadhaar" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;