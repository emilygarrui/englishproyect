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
        <img src="/src/components/header/images/Logo.png" alt="Golden Dram Logo" />
      </Link>

      <div className="tablet-title">
        GOLDEN DRAM
      </div>

      <button className="toggle-button" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/brand-list">Marcas conocidas</Link></li>
          <li><Link to="/whisky-list">Favoritos</Link></li>
          <li><Link to="/rss">Noticias</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;