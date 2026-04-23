import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import MadComputerLogo from "../../assets/MadComputerLogo.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Strona Główna", path: "/" },
    { name: "Kasy Fiskalne", path: "/Kasy-fiskalne" },
    { name: "Fotowoltaika", path: "/Fotowoltaika" },
    { name: "Usługi", path: "/Uslugi" },
    { name: "O nas", path: "/O-nas" },
  ];

  return (
    <header className="navbar-header">
      <div className="container">
        <nav className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <span className="brand-text">Mad Computer</span>
            </Link>
          </div>

          <ul className={`navbar-nav ${isMobileMenuOpen ? "nav-active" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${currentPath === link.path ? "active" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item mobile-only-action">
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="navbar-action desktop-only-action">
            <Link to="/contact" className="btn btn-primary">
              Kontakt
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
