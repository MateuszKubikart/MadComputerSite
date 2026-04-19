import { useState, useEffect } from "react";
import logo from "../../assets/MadComputerLogo.png";
import "./NavBar.css";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className={`NavBarDiv ${isScrolled ? "no-shadow" : ""}`}>
        <a href="/" className="NavLogo">
          <img src={logo} alt="Logo Sklepu" width="100px" />
        </a>
        <nav className="NavBar">
          <ul className="NavBarUl">
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
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
