import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand-section">
            <h3 className="footer-brand">Mad Computer</h3>
            <p className="footer-copyright">
              © 2026 Mad Computer. Wszelkie prawa zastrzeżone.
            </p>
          </div>

          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/status">Service Status</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
