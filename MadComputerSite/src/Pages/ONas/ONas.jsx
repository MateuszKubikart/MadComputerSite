import React from "react";
import {
  Phone,
  Mail,
  CheckCircle2,
  Target,
  ShieldCheck,
  Lightbulb,
  MapPin,
  Clock,
} from "lucide-react";
import "./ONas.css";
import SerisPhoto from "../../assets/SerwisPhoto.webp";

export default function ONas() {
  return (
    <div className="o-nas-page">
      {/* HERO SECTION */}
      <section className="o-nas-hero">
        <div className="container">
          <h1 className="o-nas-hero-title">
            Mad Computer - <br />
            <span className="text-primary">
              Twój partner w świecie technologii
            </span>
          </h1>
          <p className="o-nas-hero-desc">
            Łączymy precyzję serwisu komputerowego z innowacyjnymi rozwiązaniami
            w fotowoltaice i elektryce.
          </p>
        </div>
      </section>

      {/* BOARD AND CONTACT SECTION */}
      <section className="o-nas-board container">
        <h2 className="section-title">Kontakt bezpośredni</h2>
        <div className="board-card">
          <div className="board-image-wrapper">
            {/* Zostawione puste miejsce na zdjęcie */}
            <div className="img-placeholder w-full h-full"></div>
          </div>
          <div className="board-content">
            <span className="board-role text-muted font-semibold">
              WŁAŚCICIEL
            </span>
            <h3 className="board-name">Rafał Duś</h3>

            <div className="board-contact-list">
              <div className="board-contact-item">
                <div className="contact-icon-wrapper bg-primary">
                  <Phone size={18} color="white" />
                </div>
                <div className="contact-text-wrapper">
                  <span className="text-muted text-sm">
                    Telefon bezpośredni
                  </span>
                  <span className="font-semibold">
                    <a href="tel:+48606995924">606-995-924</a>
                  </span>
                </div>
              </div>
              <div className="board-contact-item">
                <div className="contact-icon-wrapper bg-primary">
                  <Mail size={18} color="white" />
                </div>
                <div className="contact-text-wrapper">
                  <span className="text-muted text-sm">Email kontaktowy</span>
                  <span className="font-semibold">
                    <a href="mailto:???@???.pl">???@???.pl</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY AND MISSION SECTION */}
      <section className="o-nas-history bg-surface-low">
        <div className="container">
          <h2 className="section-title">Nasza historia i misja</h2>
          <div className="history-grid">
            <div className="history-text">
              <p className="text-muted mb-4">
                Od lat dostarczamy kompleksowe rozwiązania technologiczne. Nasze
                doświadczenie w branży IT pozwala nam na błyskawiczną diagnozę i
                naprawę nawet najbardziej skomplikowanych usterek sprzętowych.
              </p>
              <p className="text-muted">
                Rozszerzyliśmy naszą działalność o fotowoltaikę i zaawansowane
                systemy zabezpieczeń, aby oferować naszym klientom pełne
                spektrum nowoczesnych technologii z zachowaniem najwyższych
                standardów inżynieryjnych.
              </p>
            </div>
            <div className="history-features-card">
              <ul className="history-features-list">
                <li>
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-muted">
                    Wieloletnie doświadczenie w IT
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-muted">
                    Doświadczeni instalatorzy OZE
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="o-nas-values container">
        <h2 className="section-title text-center">Nasze wartości</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon-wrapper bg-surface-variant text-primary">
              <Target size={24} />
            </div>
            <h3 className="value-title">Precyzja</h3>
            <p className="text-muted text-sm">
              xxxx xxxxxxx xxxxxx xxxxxxxx xxxxxx
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon-wrapper bg-surface-variant text-primary">
              <ShieldCheck size={24} />
            </div>
            <h3 className="value-title">Niezawodność</h3>
            <p className="text-muted text-sm">
              xxxx xxxxxxx xxxxxx xxxxxxxx xxxxxx xxxx xxxxxxx xxxxxx xxxxxxxx
              xxxxxx
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon-wrapper bg-surface-variant text-primary">
              <Lightbulb size={24} />
              <div className="dot absolute-dot animate-pulse bg-green"></div>
            </div>
            <h3 className="value-title">Innowacja</h3>
            <p className="text-muted text-sm">
              xxxx x xxxx xxxxxxx xxxxxx xxxxxxxx xxxxxxxxxxxx xxxxxx xxxxxxxx
              xxxxxx
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="o-nas-location bg-surface-low">
        <div className="container">
          <h2 className="section-title">Serwis w Koniecpolu</h2>
          <div className="location-grid">
            <div className="location-card">
              <div className="location-info-block mb-8">
                <h3 className="location-info-title">Adres Serwisu</h3>
                <div className="location-info-item">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-muted">
                    Koniecpol <br />
                    ul. Kościelna 12
                  </span>
                </div>
              </div>
              <div className="location-info-block">
                <h3 className="location-info-title">Godziny otwarcia</h3>
                <div className="location-info-item align-start">
                  <Clock size={20} className="text-primary" />
                  <div className="opening-hours text-muted">
                    <div className="opening-row">
                      <span>Pn - Pt:</span>
                      <span>8:00 - 16:00</span>
                    </div>
                    <div className="opening-row">
                      <span>Sobota:</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="opening-row">
                      <span>Niedziela:</span>
                      <span>Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-map-wrapper">
              <div className="img-placeholder w-full h-full">
                <img src={SerisPhoto} alt="Serwis w Koniecpolu" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
