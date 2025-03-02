import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/brand-list">Marcas conocidas</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><a href="https://github.com/emilygarrui/ReactProject" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/tiburcioCruz" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-info">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Política de Privacidad</Link></li>
            <li><Link to="/terms-and-conditions">Condiciones de Venta</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Golden Dram. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;