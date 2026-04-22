import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Serwis", path: "/" },
    { name: "Kasy Fiskalne", path: "/kasy-fiskalne" },
    { name: "Fotowoltaika", path: "/fotowoltaika" },
    { name: "DPD PickUp", path: "/dpd" },
    { name: "O nas", path: "/o-nas" },
  ];

  return (
    <header className="navbar-header">
      <div className="container">
        <nav className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              {/* Tutaj możemy użyć logo z pliku lub tekstu jak w wizualizacji */}
              <span className="brand-text">Mad Computer</span>
            </Link>
          </div>

          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${currentPath === link.path ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-action">
            <Link to="/contact" className="btn btn-primary">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
