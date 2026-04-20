import { useState, useEffect } from "react";
import logo from "../../assets/MadComputerLogo.png";
import "./NavBar.css";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1075);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1075);
      if (window.innerWidth > 1075) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = (
    <ul className={`NavBarUl ${isMenuOpen ? "mobile-open" : ""}`}>
      <li className="NavBarLi">
        <div>
          <a>Serwis</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>Fotowoltaika</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>Kasy Fiskalne</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>Usługi</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>Cennik</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>DPD Pickup</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>O nas</a>
        </div>
      </li>
      <li className="NavBarLi">
        <div>
          <a>Kontakt</a>
        </div>
      </li>
    </ul>
  );

  return (
    <header>
      <div className={`NavBarDiv ${isScrolled ? "no-shadow" : ""}`}>
        <a href="/" className="NavLogo">
          <img src={logo} alt="Logo Sklepu" width="100px" />
        </a>

        {isMobileView ? (
          <div className="MobileMenuContainer">
            <button className="MenuToggle" onClick={toggleMenu}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="5" r="2" fill="#252526" />
                <circle cx="12" cy="12" r="2" fill="#252526" />
                <circle cx="12" cy="19" r="2" fill="#252526" />
              </svg>
            </button>
            {isMenuOpen && <nav className="NavBarMobile">{navItems}</nav>}
          </div>
        ) : (
          <nav className="NavBar">{navItems}</nav>
        )}
      </div>
    </header>
  );
}

export default NavBar;
