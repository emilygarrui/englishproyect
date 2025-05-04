import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/brand-list">Recognized Brands</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="https://github.com/emilygarrui/ReactProject" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-info">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Golden Dram</p>
      </div>
    </footer>
  );
}

export default Footer;