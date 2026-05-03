import {
  Zap,
  TrendingDown,
  Leaf,
  ShieldCheck,
  Grid,
  ClipboardCheck,
  PenTool,
  Wrench,
  Wifi,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Fotowoltaika.css";
import FotowoltaikaBG from "../../assets/FotowoltaikaBG.webp";

import PhotovoltaicsPhoto1 from "../../assets/Fotowoltaika p1/photo_16.jpg";
import PhotovoltaicsPhoto2 from "../../assets/Fotowoltaika p1/photo_dom2.jpg";
import PhotovoltaicsPhoto3 from "../../assets/Fotowoltaika p1/photo_45.jpg";

function Photovoltaics() {
  return (
    <div className="pv-page">
      {/* HERO SECTION */}
      <section className="pv-hero">
        <div className="container">
          <div className="pv-hero-grid">
            <div className="hero-content">
              <div
                className="badge badge-green solid mb-4"
                style={{ marginBottom: "16px" }}
              >
                <Zap size={14} /> ENERGIA ODNAWIALNA
              </div>
              <h1 className="hero-title">
                Zabezpiecz Swój Dom Na Przyszłość <br />z{" "}
                <span className="text-primary">
                  Odnawialną Energią <Leaf size={42} strokeWidth={2.75} />
                </span>
              </h1>
              <p className="hero-description">
                Obniż rachunki za prąd nawet o 80% i zadbaj o czystszą planetę.
                Mad Computer zapewnia wysokowydajne instalacje fotowoltaiczne z
                kompleksowym wsparciem technicznym.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Darmowa Wycena</button>
                <button className="btn btn-outline">Nasze Realizacje</button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="img-placeholder" style={{ aspectRatio: "4/3" }}>
                <img
                  src={FotowoltaikaBG}
                  alt="Zdjęcie Paneli Fotowolaicznych"
                />
              </div>
              <div className="savings-card">
                <div className="savings-header">
                  <Zap size={16} color="var(--color-green)" />
                  <strong>Oszczędności</strong>
                </div>
                <p>
                  Szacowane średnie oszczędności na poziomie 6 000 zł rocznie
                  dla standardowej instalacji 5kWp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Dlaczego Fotowoltaika Mad Computer?
            </h2>
            <p className="section-subtitle">
              Łączymy inżynieryjną precyzję z najwyższej klasy sprzętem, aby
              dostarczać systemy, które działają bezawaryjnie przez długie lata.
            </p>
          </div>

          <div className="bento-grid-pv">
            {/* Card 1 */}
            <div className="p-card card-savings">
              <div className="p-card-content">
                <div className="card-icon green-icon bg-transparent">
                  <TrendingDown size={28} />
                </div>
                <h3>Znaczące Oszczędności</h3>
                <p>
                  Zablokuj stawki za prąd na kolejne dziesięciolecia. Przy
                  rosnących kosztach energii, Twoja inwestycja w fotowoltaikę
                  zyskuje na wartości każdego roku. Większość instalacji zwraca
                  się w 5-7 lat.
                </p>
                <span className="live-status mt-auto">
                  <span className="dot"></span> Monitorowanie Wydajności na Żywo
                </span>
              </div>
              <div className="placeholder-chart">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-card card-green text-white">
              <div className="p-card-content">
                <div className="card-icon text-white mb-4">
                  <Leaf size={32} />
                </div>
                <h3 style={{ color: "white" }}>Z Troski o Środowisko</h3>
                <p style={{ color: "#e5e7eb" }}>
                  Jedna domowa instalacja zmniejsza emisję CO2 o wartość
                  odpowiadającą posadzeniu 150 drzew każdego roku.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-card">
              <div className="p-card-content">
                <div className="card-icon red-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3>Do ## Lat Gwarancji</h3>
                <p>
                  Spokój ducha dzięki naszym kompleksowym, wiodącym w branży
                  gwarancjom na podzespoły i montaż.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-card p-0 flex-row">
              <div className="p-card-content flex-1">
                <div className="card-icon green-icon">
                  <Grid size={24} />
                </div>
                <h3>Komponenty Najwyższej Jakości</h3>
                <p>
                  Używamy wyłącznie wysokowydajnych modułów i inteligentnych
                  falowników od producentów, takich jak ##### i ########.
                </p>
              </div>
              <div className="placeholder-texture"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Nasz Proces Realizacji</h2>
            <p className="section-subtitle">
              Profesjonalne wykonanie od wstępnego audytu aż po podłączenie do
              sieci.
            </p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-icon">
                <ClipboardCheck size={28} />
              </div>
              <h4>1. Audyt Energetyczny</h4>
              <p>Bezpłatne oględziny i dokładna analiza zapotrzebowania.</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <PenTool size={28} />
              </div>
              <h4>2. Projekt Indywidualny</h4>
              <p>Dedykowany projekt dla maksymalnego uzysku ze słońca.</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <Wrench size={28} />
              </div>
              <h4>3. Profesjonalny Montaż</h4>
              <p>Szybka instalacja przez certyfikowanych specjalistów.</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <Wifi size={28} />
              </div>
              <h4>4. Uruchomienie</h4>
              <p>Podłączenie do sieci i konfiguracja aplikacji mobilnej.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-header">
            <div>
              <h2 className="section-title">Zrealizowane Projekty</h2>
              <p className="section-subtitle">
                Zobacz, jak pomogliśmy obniżyć rachunki lokalnym firmom i
                domostwom.
              </p>
            </div>
          </div>

          <div className="projects-wrapper">
            <div className="projects-grid">
              <div className="project-card">
                <div className="img-placeholder project-img">
                  <img
                    src={PhotovoltaicsPhoto1}
                    alt="Projekt Instalacji Fotowoltaiki"
                  />
                  <div className="badge badge-green solid project-badge">
                    Firma 25kWp
                  </div>
                </div>
                <div className="project-info">
                  <h4>Instalacja Dla Firm</h4>
                  <p>Obniżenie rocznych kosztów operacyjnych o 45%.</p>
                </div>
              </div>

              <div className="project-card">
                <div className="img-placeholder project-img">
                  <img
                    src={PhotovoltaicsPhoto2}
                    alt="Projekt Instalacji Fotowoltaiki"
                  />
                  <div className="badge badge-green solid project-badge">
                    Dom 8kWp
                  </div>
                </div>
                <div className="project-info">
                  <h4>Zielona Rezydencja</h4>
                  <p>Niezależność energetyczna dla 4-osobowej rodziny.</p>
                </div>
              </div>

              <div className="project-card">
                <div className="img-placeholder project-img">
                  <img
                    src={PhotovoltaicsPhoto3}
                    alt="Projekt Instalacji Fotowoltaiki"
                  />
                  <div className="badge badge-green solid project-badge">
                    Gospodarstwo 40kWp
                  </div>
                </div>
                <div className="project-info">
                  <h4>Samowystarczalna Instalacja w Lesie</h4>
                  <p>System odporny na zewnętrze braki w dostawie prądu.</p>
                </div>
              </div>
            </div>

            <Link to="/Fotowoltaika/Projekty" className="view-gallery-btn">
              Zobacz Całą Galerię <ArrowRight size={28} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="pv-form-section">
        <div className="container">
          <div className="form-grid">
            <div className="form-content text-white">
              <h2 className="section-title text-white">
                Gotowy na Oszczędności ze Słońca?
              </h2>
              <p className="form-desc">
                Zadzwoń do nas, a przygotujemy wstępną wycenę oraz projekt
                systemu.
              </p>

              <ul className="form-benefits">
                <li>
                  <CheckCircle2 color="var(--color-green)" size={20} /> Darmowa
                  konsultacja techniczna u Ciebie
                </li>
                <li>
                  <CheckCircle2 color="var(--color-green)" size={20} />{" "}
                  Spersonalizowane wyliczenia zwrotu z inwestycji
                </li>
                <li>
                  <CheckCircle2 color="var(--color-green)" size={20} />{" "}
                  Kompleksowa pomoc w pozyskaniu dofinansowania
                </li>
              </ul>
            </div>

            <div className="form-card">
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

export default Photovoltaics;
