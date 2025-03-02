import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/home" className="logo">
        <img src="/src/components/header/images/Logo.png" alt="Golden Dram Logo" />
      </Link>

      {/* Texto "GOLDEN DRAM" (solo para tablets) */}
      <div className="tablet-title">
        GOLDEN DRAM
      </div>

      {/* Botón de Toggle con FontAwesome (desde CDN) */}
      <button className="toggle-button" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i> {/* Cambia entre íconos */}
      </button>

      {/* Navegación (menú desplegable) */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/brand-list">Marcas conocidas</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;