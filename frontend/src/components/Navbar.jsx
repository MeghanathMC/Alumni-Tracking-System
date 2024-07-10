import React from "react";
import { Link } from "react-router-dom";
// Ensure this line imports your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src="/path-to-logo.png" alt="Logo" className="navbar-logo" />
        </Link>
        <Link to="/">
          <span className="navbar-link">XAlumni</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/alumni-space" className="navbar-link">
          Alumni Space
        </Link>
        <Link to="/gallery" className="navbar-link">
          Gallery
        </Link>
        <Link to="/signup" className="navbar-link">
          Signup
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
