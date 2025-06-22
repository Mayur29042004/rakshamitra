import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rakshamitra</h1>
      <ul>
        <li><Link to="/fire">Fire Service</Link></li>
        <li><Link to="/ambulance">Ambulance Service</Link></li>
        <li><Link to="/police">Police Services</Link></li>
      </ul>
    </div>
  );
}
