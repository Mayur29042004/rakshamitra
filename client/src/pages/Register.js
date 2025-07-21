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
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="aadhaar" placeholder="Aadhaar" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;