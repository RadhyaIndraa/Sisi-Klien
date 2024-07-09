import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link className="text-white" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white" to="/mahasiswa">Mahasiswa</Link>
        </li>
        <li>
          <Link className="text-white" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
