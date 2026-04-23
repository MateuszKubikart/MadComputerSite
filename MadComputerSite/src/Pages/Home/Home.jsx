import {
  CheckCircle2,
  MonitorCheck,
  Receipt,
  Zap,
  MapPin,
  Package,
  Clock,
  Phone,
  Mail,
  Cctv,
  Siren,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";
import compServiceImg from "../../assets/CompService.jpg";

function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge badge-green">
                <CheckCircle2 size={14} />
                NAJWYŻSZA JAKOŚĆ
              </div>
              <h1 className="hero-title">
                Serwis Komputerowy <br />
                <span className="text-primary">Mad Computer</span>
              </h1>
              <p className="hero-description">
                Oferujemy nowoczesne rozwiązania techniczne - od precyzyjnej
                diagnostyki komputerowej po wydajną fotowoltaikę - łącząc
                zaawansowane technologie z niezawodnością, której możesz zaufać.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Nasz Serwis</button>
                <button className="btn btn-outline">Dowiedz się więcej</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="img-placeholder" style={{ aspectRatio: "4/3" }}>
                <span style={{ color: "#aaa" }}>Zdjecie serwisu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">Działalność Techniczna</h2>
            <div className="section-subtitle-container">
              <p className="section-subtitle">
                Usługi specjalistyczne przeznaczone dla wymagających i
                codziennych problemów
              </p>
            </div>
          </div>

          <div className="bento-grid">
            {/* DUZA KARTA - COMPUTER SERVICE */}
            <div className="bento-card bento-large">
              <div className="card-content">
                <div className="card-icon red-icon">
                  <MonitorCheck size={24} />
                </div>
                <h3>Serwis Komputerów</h3>
                <p>
                  Wymiana podzespołów, aktualizacja oprogramowania. Naprawiamy
                  twoje urządzenia z minimalnym przestojem.
                </p>
                <ul className="list-features">
                  <li>
                    <CheckCircle2 size={16} color="var(--color-primary)" />{" "}
                    Wymiana Podzespołów
                  </li>
                  <li>
                    <CheckCircle2 size={16} color="var(--color-primary)" />{" "}
                    Odzyskiwanie Danych
                  </li>
                </ul>
              </div>
              <div className="card-image-half">
                <div className="img-placeholder">
                  <img src={compServiceImg} alt="Computer Service" />
                </div>
              </div>
            </div>

            {/* MALA KARTA GORA - KASY */}
            <div className="bento-card">
              <div className="card-content">
                <div className="card-icon red-icon">
                  <Receipt size={24} />
                </div>
                <h3>Kasy Fiskalne</h3>
                <p>
                  Przegląd Kas Fiskalnych, wdrożenie systemów POS i certyfikacja
                  fiskalna. Zachowaj zgodność z najnowszymi wymogami prawnymi
                  bez wysiłku.
                </p>
                <a href="#" className="link-more">
                  Przeczytaj więcej <span>→</span>
                </a>
              </div>
            </div>

            {/* MALA KARTA LEWA DOŁ - FOTOWOLTAIKA */}
            <div className="bento-card bg-green-tint">
              <div className="card-content">
                <div className="card-icon green-icon">
                  <Zap size={24} />
                </div>
                <div className="card-top-right-badge">
                  <span className="badge badge-green solid">
                    Zielona Energia
                  </span>
                </div>
                <h3>Fotowoltaika</h3>
                <p>
                  Zrównoważone rozwiązania w zakresie pozyskiwania energii.
                  Projektowane na zamówienie panele słoneczne, które zmniejszają
                  ślad węglowy i koszty energii.
                </p>
                <span className="live-status">
                  <span className="dot"></span> APLIKACJA DO MONITOROWANIA
                </span>
              </div>
            </div>

            {/* SRODKOWA KARTA DOŁ - ELECTRICAL */}
            <div className="bento-card">
              <div className="card-content pb-0">
                <div className="card-icon red-icon">
                  <Zap size={24} />
                </div>
                <h3>Serwis Elektryki</h3>
                <p>
                  Nasza oferta obejmuje naprawę urządzeń elektrotechnicznych, w
                  ramach których przywracamy pełną sprawność Twoim urządzeniom
                  lub dokonujemy ich wymiany.
                </p>
              </div>
            </div>

            {/* PRAWA KARTA DOŁ - DPD */}
            <div className="bento-card">
              <div className="card-content pb-0">
                <div className="card-icon red-icon">
                  <Package size={24} />
                </div>
                <h3>DPD PickUp</h3>
                <p>
                  Autoryzowany punkt logistyczny do bezpiecznego nadawania i
                  odbioru paczek. Wygodny dostęp dla Twojej firmy i osób
                  prywatnych.
                </p>
              </div>
              <div className="card-footer-gray">
                <MapPin size={16} />
                <span>Kościelna 12, 42-230 Koniecpol</span>
              </div>
            </div>

            {/* MALA KARTA GORA - MONITORING */}
            <div className="bento-card">
              <div className="card-content">
                <div className="card-icon red-icon">
                  <Cctv size={24} />
                </div>
                <h3>Monitoring</h3>
                <p>
                  Wdrożenie nowoczesnych systemów umożliwiających stały podgląd
                  online i skuteczną wideoweryfikację zdarzeń z dowolnego
                  miejsca na świecie.
                </p>
                <Link to="/Uslugi#monitoring" className="link-more">
                  Przeczytaj więcej <span>→</span>
                </Link>
              </div>
            </div>

            {/* MALA KARTA GORA - AUTOMATYKA BRAM */}
            <div className="bento-card">
              <div className="card-content">
                <div className="card-icon red-icon">
                  <Wrench size={24} />
                </div>
                <h3>Automatyka Bram</h3>
                <p>
                  Instalacja niezawodnych napędów do bram wjazdowych i
                  garażowych, zdalne sterowanie smartfonem oraz maksymalny
                  komfort codziennego użytkowania.
                </p>
                <Link to="/Uslugi#automatyka" className="link-more">
                  Przeczytaj więcej <span>→</span>
                </Link>
              </div>
            </div>

            {/* MALA KARTA GORA - ALARMY */}
            <div className="bento-card">
              <div className="card-content">
                <div className="card-icon red-icon">
                  <Siren size={24} />
                </div>
                <h3>Systemy Alarmowe</h3>
                <p>
                  Projektowanie i montaż inteligentnych systemów gwarantujących
                  natychmiastowe powiadomienie o zagrożeniu i pełne
                  bezpieczeństwo Twojego mienia przez całą dobę.
                </p>
                <Link to="/Uslugi#alarmy" className="link-more">
                  Przeczytaj więcej <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">LAT DOŚWIADCZENIA</div>
            </div>
            <div className="stat-item" style={{ backgroundColor: "red" }}>
              <div className="stat-number">####</div>
              <div className="stat-label">##### ###### ##</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ backgroundColor: "red" }}>
                10 000+
              </div>
              <div className="stat-label">OBSŁUŻONYCH KLIENTÓW</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Kontakt</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Adres</h4>
                  <p>
                    Koniecpol
                    <br />
                    ul. Kościelna 12
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Godziny otwarcia</h4>
                  <p>
                    pon-pt: 8.00-16.00
                    <br />
                    sob: 9.00-13.00
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Telefon</h4>
                  <p>795-347-346</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>sklep@madcomputer.pl</p>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.7084140284671!2d19.680548264046998!3d50.772356575704315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717422638f1ccf3%3A0x3f5f6b12f3a5aaf5!2sP.P.H.U.%20MAD-COMPUTER!5e0!3m2!1spl!2spl!4v1776894660351!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
