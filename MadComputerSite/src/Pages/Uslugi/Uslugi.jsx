import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2, Phone, Video, ShieldAlert, Cpu } from "lucide-react";

import housePhoto from "../../assets/56087c1ee3bf9786c17720fdb54d5b9e.jpg";
import cameraPhoto from "../../assets/44.jpg";
import gatePhoto from "../../assets/45.jpg";
import securityPhoto from "../../assets/43.jpg";

import "./Uslugi.css";

function Uslugi() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="uslugi-page">
      {/* Hero Section */}
      <section className="uslugi-hero">
        <div className="container">
          <div className="uslugi-grid">
            <div className="hero-content text-content">
              <div
                className="badge badge-green solid mb-4"
                style={{ marginBottom: "16px" }}
              >
                <Cpu size={14} /> SYSTEMY INTELIGENTNE
              </div>
              <h1 className="hero-title">
                Bezpieczeństwo i <br />
                <span className="text-primary">Automatyka</span> dla Twojego
                domu
              </h1>
              <p className="hero-description">
                Zapewniamy profesjonalny montaż i serwis nowoczesnych systemów
                monitoringu, automatyki bram i systemów alarmowych. Technologia,
                której możesz ufać.
              </p>
              <div className="hero-actions">
                <a href="#kontakt" className="btn btn-primary">
                  Skonsultuj projekt
                </a>
                <a href="#" className="btn btn-outline">
                  Nasze realizacje
                </a>
              </div>
            </div>
            <div className="hero-image image-content">
              <div
                className="img-placeholder"
                style={{ aspectRatio: "4/3", backgroundColor: "#0f4c81" }}
              >
                <img src={housePhoto} alt="Zdjęcie autonomiczenego domu" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inteligentny Monitoring */}
      <section id="monitoring" className="uslugi-section section-bg-css">
        <div className="container">
          <div className="uslugi-grid">
            <div className="text-content">
              <div className="feature-badge">
                <Video size={14} style={{ marginRight: "6px" }} /> CCTV
              </div>
              <h2 className="feature-title">Inteligentny Monitoring</h2>
              <p className="feature-desc">
                Miej wszystko pod kontrolą, niezależnie od tego, gdzie jesteś.
                Nasze systemy monitoringu wizyjnego oferują obraz w wysokiej
                rozdzielczości, widoczność w nocy i zaawansowaną analitykę
                obrazu.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Dostęp zdalny z poziomu aplikacji na smartfonie.</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>
                    Zaawansowana detekcja ruchu i rozpoznawanie obiektów.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>
                    Archiwizacja nagrań na bezpiecznych serwerach lokalnych.
                  </span>
                </li>
              </ul>
            </div>
            <div className="image-content">
              <div
                className="img-placeholder feature-image"
                style={{ backgroundColor: "#222" }}
              >
                <img src={cameraPhoto} alt="Zdjęcie kamery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automatyka Bram */}
      <section
        id="automatyka"
        className="uslugi-section section-bg-css"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container">
          <div className="uslugi-grid">
            <div className="image-content">
              <div
                className="img-placeholder feature-image"
                style={{ backgroundColor: "#e5e7eb" }}
              >
                <img src={gatePhoto} alt="Zdjęcie bramy automatycznej" />
              </div>
            </div>
            <div className="text-content">
              <div className="feature-badge">
                <Cpu size={14} style={{ marginRight: "6px" }} /> NAPĘDY
              </div>
              <h2 className="feature-title">Automatyka Bram</h2>
              <p className="feature-desc">
                Niezawodne i szybkie napędy do bram wjazdowych i garażowych.
                Zapewniamy komfort codziennego użytkowania dzięki integracji z
                systemami Smart Home.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Sterowanie pilotem, aplikacją lub geolokalizacją.</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Zabezpieczenia przeciwzgnieceniowe i fotokomórki.</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Szybki czas otwierania i cicha praca napędów.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Systemy Alarmowe */}
      <section id="alarmy" className="uslugi-section section-bg-css">
        <div className="container">
          <div className="uslugi-grid">
            <div className="text-content">
              <div className="feature-badge">
                <ShieldAlert size={14} style={{ marginRight: "6px" }} /> SYSTEMY
                ALARMOWE
              </div>
              <h2 className="feature-title">Systemy Alarmowe</h2>
              <p className="feature-desc">
                Detekcja włamań, intruzów, nieproszonych gości. Niezawodne
                czujniki, powiadomienia i bezawaryjność systemów to nasz
                priorytet.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckCircle2 size={20} />
                  <span>Detekcja włamań</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Powiadomienia Smart</span>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <span>Niezawodność 24/7</span>
                </li>
              </ul>
            </div>
            <div className="image-content">
              <div
                className="img-placeholder feature-image"
                style={{ backgroundColor: "#eef2f6" }}
              >
                <img src={securityPhoto} alt="Zdjęcie Alarmu" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="uslugi-projects" className="uslugi-projects-section">
        <div className="container">
          <h2 className="projects-heading">Nasze Realizacje</h2>
          <p className="projects-subheading">
            Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.
          </p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-wrapper">
                <img src={cameraPhoto} alt="Instalacja monitoringu" />
              </div>
              <div className="project-card-body">
                <h3>Monitoring domu jednorodzinnego</h3>
                <p>
                  Kompleksowa instalacja 6 kamer IP z podglądem online i
                  rejestracją 24/7.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image-wrapper">
                <img src={gatePhoto} alt="Automatyka bramy" />
              </div>
              <div className="project-card-body">
                <h3>Automatyzacja bramy wjazdowej</h3>
                <p>
                  Montaż napędu bramy przesuwnej ze sterowaniem z aplikacji
                  mobilnej.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image-wrapper">
                <img src={securityPhoto} alt="System alarmowy" />
              </div>
              <div className="project-card-body">
                <h3>System alarmowy dla firmy</h3>
                <p>
                  Wdrożenie systemu z czujnikami ruchu, syrenami i
                  powiadomieniem SMS.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <a href="#" className="btn btn-primary">
              Zobacz pełną galerię →
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="kontakt" className="uslugi-contact">
        <div className="container">
          <div className="uslugi-grid">
            <div className="contact-info text-content">
              <h2>Zabezpiecz swój dom już dziś</h2>
              <p>
                Skontaktuj się z nami, aby omówić szczegóły i otrzymać darmową
                wycenę systemu dopasowanego do Twoich potrzeb.
              </p>
            </div>
            <div className="phone-card-wrapper">
              <div className="phone-card">
                <div className="phone-icon-wrap">
                  <Phone size={24} />
                </div>
                <div className="phone-details">
                  <span>ZADZWOŃ DO NAS</span>
                  <strong>606-995-924</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Uslugi;
