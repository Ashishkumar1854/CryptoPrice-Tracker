import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-extrabold text-green-400">XivTech</h1>
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/more" className="hover:text-green-400 transition">
            More
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
