import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/sobre" className="text-white">Sobre</Link></li>
        <li><Link to="/contato" className="text-white">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
