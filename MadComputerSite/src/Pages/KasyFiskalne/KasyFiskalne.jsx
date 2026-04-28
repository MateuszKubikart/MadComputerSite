import React from "react";
import {
  BadgeCheck,
  CalendarCheck,
  Wrench,
  BookOpen,
  CheckCircle2,
  Award,
  MapPin,
  Zap,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import farexLogo from "../../assets/farex.png";
import posnetLogo from "../../assets/posnet.png";
import "./KasyFiskalne.css";

export default function KasyFiskalne() {
  return (
    <div className="kasy-page">
      {/* HERO SECTION */}
      <section className="kasy-hero container">
        <div className="kasy-hero-grid">
          <div className="kasy-hero-content">
            <div className="kasy-badge badge-green">
              <BadgeCheck size={16} />
              <span>Certyfikowany Serwis</span>
            </div>
            <h1 className="kasy-hero-title">
              Profesjonalny serwis{" "}
              <span className="text-primary">kas fiskalnych</span>
            </h1>
            <p className="kasy-hero-desc text-muted">
              Zapewniamy ciągłość Twojej sprzedaży. Od terminowych przeglądów
              ustawowych po błyskawiczne naprawy i profesjonalne doradztwo. Twój
              biznes nie może czekać.
            </p>
            <div className="kasy-hero-actions">
              <button className="btn btn-primary btn-large">
                Zamów Serwis
              </button>
              <button className="btn btn-outline btn-large">
                Przeczytaj Przepisy
              </button>
            </div>
          </div>
          <div className="kasy-hero-image-wrapper">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI14Xxbq0ZlwuIIMi0041ZeYrHEeePi56_thJEb3epU_wpO3Yze5vEH4ZrexIYHWLbAGPgEA6noNsmuskKEMZv_-ZVJmJZuo4Y6zwALxbDtm6E3iwJt7STdtsGNQjduikbuwNUjensUt0T_2YC_9lZxMK2Y0w24Ef5A1Uhb1K0LcaUwjZbvwTkoNagPiAD-WWwCHM34kR5hnlWqvMUG7vWd9ngAPsYdoCVBd-fhRUV6aJdwvxI4eAX4k3lsk0jB2k-HqS11vyJVTsU"
              alt="Kasa fiskalna"
              className="kasy-hero-img"
            />
            <div className="kasy-hero-floating-card">
              <div className="dot animate-pulse"></div>
              <span className="font-semibold">Wsparcie Techniczne Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="kasy-brands container">
        <h3 className="kasy-brands-title">OBSŁUGIWANE MARKI</h3>
        <div className="kasy-brands-logos">
          <img src={farexLogo} alt="Farex" />
          <img src={posnetLogo} alt="Posnet" />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="kasy-services-wrapper">
        <div className="kasy-services container">
          <div className="kasy-services-header">
            <h2>Nasze Usługi Fiskalne</h2>
            <p className="text-muted">
              Kompleksowa obsługa urządzeń fiskalnych. Dbamy o to, byś mógł
              skupić się wyłącznie na prowadzeniu swojego biznesu.
            </p>
          </div>
          <div className="kasy-services-grid">
            <div className="kasy-service-card">
              <div className="kasy-service-icon bg-surface-variant text-primary">
                <CalendarCheck size={32} />
              </div>
              <h3>Przeglądy Ustawowe</h3>
              <p className="text-muted">
                Pilnujemy terminów za Ciebie. Przeprowadzamy obowiązkowe
                przeglądy techniczne zgodnie z literą prawa, gwarantując ważność
                homologacji urządzenia.
              </p>
              <ul className="kasy-service-features">
                <li>
                  <CheckCircle2 size={16} className="text-primary" />
                  Przypomnienia SMS/Email
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-primary" />
                  Autoryzowany wpis
                </li>
              </ul>
            </div>
            <div className="kasy-service-card">
              <div className="kasy-service-icon bg-surface-variant text-primary">
                <Wrench size={32} />
              </div>
              <h3>Naprawa i Serwis</h3>
              <p className="text-muted">
                Błyskawiczna reakcja na awarie. Posiadamy na stanie oryginalne
                części zamienne, dzięki czemu minimalizujemy przestoje w Twojej
                sprzedaży.
              </p>
              <ul className="kasy-service-features">
                <li>
                  <CheckCircle2 size={16} className="text-primary" />
                  Szybka diagnoza
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-primary" />
                  Urządzenia zastępcze
                </li>
              </ul>
            </div>
            <div className="kasy-service-card">
              <div className="kasy-service-icon bg-surface-variant text-primary">
                <BookOpen size={32} />
              </div>
              <h3>Książeczki Serwisowe</h3>
              <p className="text-muted">
                Prawidłowe prowadzenie dokumentacji to podstawa. Pomagamy w
                formalnościach, odczytach pamięci oraz zgłoszeniach do Urzędu
                Skarbowego.
              </p>
              <ul className="kasy-service-features">
                <li>
                  <CheckCircle2 size={16} className="text-primary" />
                  Pełna dokumentacja
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-primary" />
                  Pomoc urzędowa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="kasy-why-us container">
        <div className="kasy-why-grid">
          <div className="kasy-why-image-wrapper">
            <img src="" alt="Zdjęcie" />
          </div>
          <div className="kasy-why-content">
            <h2>Dlaczego my?</h2>
            <p className="text-muted mb-8">
              Od lat wspieramy lokalnych przedsiębiorców. Wiemy, że w handlu i
              usługach każda minuta przestoju to strata. Dlatego stawiamy na
              niezawodność i szybkość.
            </p>
            <div className="kasy-why-item">
              <div className="kasy-why-icon bg-surface-variant text-primary">
                <Award size={24} />
              </div>
              <div>
                <h4>Wieloletnie Doświadczenie</h4>
                <p className="text-muted">
                  Posiadamy uprawnienia na większość urządzeń dostępnych na
                  polskim rynku.
                </p>
              </div>
            </div>
            <div className="kasy-why-item">
              <div className="kasy-why-icon bg-surface-variant text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Lokalna Firma</h4>
                <p className="text-muted">
                  Jesteśmy blisko. Dzięki temu nasz czas dojazdu w sytuacjach
                  awaryjnych jest zredukowany do minimum.
                </p>
              </div>
            </div>
            <div className="kasy-why-item">
              <div className="kasy-why-icon bg-surface-variant text-primary">
                <Zap size={24} />
              </div>
              <div>
                <h4>Szybka Reakcja</h4>
                <p className="text-muted">
                  Awaria kasy w piątek wieczorem? Dla naszych stałych klientów
                  świadczymy wsparcie priorytetowe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title text-center mb-12">
            Przegląd Kas Fiskalnych U Nas
          </h2>
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
                  <h4>Telefon do serwisu</h4>
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
