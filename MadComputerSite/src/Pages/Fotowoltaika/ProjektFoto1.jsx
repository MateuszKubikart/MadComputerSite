import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  BadgeDollarSign,
  Clock,
  Leaf,
  SolarPanel,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import "./ProjektFoto1.css";

// Projekt 1 – Dom jednorodzinny
import p1_1 from "../../assets/Fotowoltaika p1/photo_dom1.jpg";
import p1_2 from "../../assets/Fotowoltaika p1/photo_dom2.jpg";
import p1_3 from "../../assets/Fotowoltaika p1/photo_dom3.jpg";
import p1_4 from "../../assets/Fotowoltaika p1/photo_dom4.jpg";
import p1_5 from "../../assets/Fotowoltaika p1/photo_2.jpg";
import p1_6 from "../../assets/Fotowoltaika p1/photo_3.jpg";
import p1_7 from "../../assets/Fotowoltaika p1/photo_5.jpg";
import p1_8 from "../../assets/Fotowoltaika p1/photo_6.jpg";
import p1_9 from "../../assets/Fotowoltaika p1/photo_7.jpg";
import p1_10 from "../../assets/Fotowoltaika p1/photo_8.jpg";

// Projekt 2 – Szkoła podstawowa
import p2_1 from "../../assets/Fotowoltaika p1/photo_10.jpg";
import p2_2 from "../../assets/Fotowoltaika p1/photo_11.jpg";
import p2_3 from "../../assets/Fotowoltaika p1/photo_12.jpg";
import p2_4 from "../../assets/Fotowoltaika p1/photo_13.jpg";
import p2_5 from "../../assets/Fotowoltaika p1/photo_14.jpg";
import p2_6 from "../../assets/Fotowoltaika p1/photo_15.jpg";
import p2_7 from "../../assets/Fotowoltaika p1/photo_16.jpg";
import p2_8 from "../../assets/Fotowoltaika p1/photo_17.jpg";
import p2_9 from "../../assets/Fotowoltaika p1/photo_18.jpg";
import p2_10 from "../../assets/Fotowoltaika p1/photo_19.jpg";
import p2_11 from "../../assets/Fotowoltaika p1/photo_20.jpg";

const PROJECTS = [
  {
    title: "Dom jednorodzinny – Koniecpol",
    description:
      "Kompletna realizacja instalacji paneli fotowoltaicznych na dachu domu jednorodzinnego. Projekt obejmował dobór komponentów, montaż, konfigurację falownika oraz uruchomienie monitoringu online.",
    stats: [
      { icon: Zap, label: "Wydajność", value: "8.2 kWp" },
      { icon: BadgeDollarSign, label: "Koszt", value: "~32 000 zł" },
      { icon: Clock, label: "Realizacja", value: "3 dni" },
      { icon: Leaf, label: "Oszczędność roczna", value: "~6 800 zł" },
      { icon: SolarPanel, label: "Zamontowane Panele", value: "10" },
    ],
    photos: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7, p1_8, p1_9, p1_10],
  },

  {
    title: "Szkoła Podstawowa – instalacja fotowoltaiki",
    description:
      "Montaż instalacji fotowoltaicznej na dachu szkoły. Projekt zrealizowany we współpracy, obejmujący analizę zużycia energii, dobór paneli i falownika oraz pełną dokumentację.",
    stats: [
      { icon: Zap, label: "Wydajność", value: "24.5 kWp" },
      { icon: BadgeDollarSign, label: "Koszt", value: "~98 000 zł" },
      { icon: Clock, label: "Realizacja", value: "7 dni" },
      { icon: Leaf, label: "Oszczędność roczna", value: "~21 000 zł" },
      { icon: SolarPanel, label: "Zamontowane Panele", value: "24" },
    ],
    photos: [
      p2_1,
      p2_2,
      p2_3,
      p2_4,
      p2_5,
      p2_6,
      p2_7,
      p2_8,
      p2_9,
      p2_10,
      p2_11,
    ],
  },
];

export default function ProjektFoto1() {
  const [lightbox, setLightbox] = useState({
    open: false,
    photos: [],
    index: 0,
  });

  const openLightbox = (photos, index) =>
    setLightbox({ open: true, photos, index });
  const closeLightbox = () =>
    setLightbox({ open: false, photos: [], index: 0 });

  const goNext = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.photos.length,
    }));
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.photos.length) % prev.photos.length,
    }));
  };

  return (
    <div className="projekt-page">
      {/* ── HERO ── */}
      <section className="projekt-hero">
        <div className="container">
          <Link to="/Fotowoltaika" className="projekt-back-link">
            <ArrowLeft size={18} />
            Powrót do Fotowoltaiki
          </Link>
          <h1 className="projekt-hero-title">
            Nasze <span>Realizacje</span>
          </h1>
          <p className="projekt-hero-desc">
            Poniżej prezentujemy wybrane projekty instalacji fotowoltaicznych
            zrealizowane przez Mad Computer. Każdy projekt obejmował pełen
            zakres prac – od analizy po uruchomienie.
          </p>
        </div>
      </section>

      {/* ── PROJEKTY ── */}
      {PROJECTS.map((project, pIdx) => (
        <section
          className={`projekt-section ${pIdx % 2 === 1 ? "projekt-section-alt" : ""}`}
          key={pIdx}
        >
          <div className="container">
            <div className="projekt-layout">
              {/* LEFT – info */}
              <div className="projekt-info-col">
                <div className="projekt-number">Projekt {pIdx + 1}</div>
                <h2 className="projekt-section-title">{project.title}</h2>
                <p className="projekt-section-desc">{project.description}</p>
                <ul className="projekt-stats-list">
                  {project.stats.map((stat) => (
                    <li key={stat.label}>
                      <div className="projekt-stat-icon-sm">
                        <stat.icon size={18} />
                      </div>
                      <div>
                        <span className="projekt-stat-label-sm">
                          {stat.label}
                        </span>
                        <span className="projekt-stat-value-sm">
                          {stat.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT – gallery grid */}
              <div className="projekt-gallery-col">
                <div className="projekt-gallery-grid">
                  {project.photos.map((src, i) => (
                    <div
                      className="projekt-gallery-item"
                      key={i}
                      onClick={() => openLightbox(project.photos, i)}
                    >
                      <img
                        src={src}
                        alt={`${project.title} – zdjęcie ${i + 1}`}
                      />
                      <div className="projekt-gallery-overlay">
                        <span>Powiększ</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── LIGHTBOX ── */}
      {lightbox.open && (
        <div className="projekt-lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Zamknij"
          >
            <X size={28} />
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={goPrev}
            aria-label="Poprzednie"
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="lightbox-image-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.photos[lightbox.index]}
              alt={`Powiększone zdjęcie ${lightbox.index + 1}`}
            />
            <div className="lightbox-counter">
              {lightbox.index + 1} / {lightbox.photos.length}
            </div>
          </div>
          <button
            className="lightbox-arrow lightbox-next"
            onClick={goNext}
            aria-label="Następne"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
