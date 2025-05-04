import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/home" className="logo">
        <img src="/header/Logo.png" alt="Golden Dram Logo" />
      </Link>

      <div className="tablet-title">
        GOLDEN DRAM
      </div>

      <button className="toggle-button" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/brand-list">Recognized Brands</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;