import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/police" className="hover:underline">Police</Link>
      <Link to="/ambulance" className="hover:underline">Ambulance</Link>
      <Link to="/fire" className="hover:underline">Fire Brigade</Link>
    </nav>
  );
};

export default Navbar;
