import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import "./Kontakt.css";

const TODAY_INDEX = new Date().getDay(); // 0=Sun, 1=Mon … 6=Sat

const HOURS = [
  { label: "Poniedziałek", value: "8:00 – 16:00", day: 1 },
  { label: "Wtorek", value: "8:00 – 16:00", day: 2 },
  { label: "Środa", value: "8:00 – 16:00", day: 3 },
  { label: "Czwartek", value: "8:00 – 16:00", day: 4 },
  { label: "Piątek", value: "8:00 – 16:00", day: 5 },
  { label: "Sobota", value: "9:00 – 13:00", day: 6 },
  { label: "Niedziela", value: "Zamknięte", day: 0, closed: true },
];

const TOPICS = [
  "Serwis komputerowy",
  "Kasy fiskalne",
  "Fotowoltaika",
  "Serwis elektryki",
  "Monitoring / Alarmy",
  "Automatyka bram",
  "DPD – odbiór / nadanie",
  "Inne",
];

export default function Kontakt() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up real submission (e.g. emailjs / backend endpoint)
    setSent(true);
  };

  return (
    <div className="kontakt-page">
      {/* ── HERO ── */}
      <section className="kontakt-hero">
        <div className="container">
          <div className="kontakt-hero-inner">
            <div className="kontakt-hero-badge">
              <MessageSquare size={14} />
              Zawsze do Twojej dyspozycji
            </div>
            <h1 className="kontakt-hero-title">
              Skontaktuj się <br />
              <span>z nami</span>
            </h1>
            <p className="kontakt-hero-desc">
              Masz pytanie, chcesz wycenić usługę lub po prostu zadzwonić?
              Jesteśmy tu dla Ciebie. Odpowiadamy szybko i rzetelnie.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN BODY ── */}
      <section className="kontakt-body">
        <div className="container">
          <div className="kontakt-grid">
            {/* ── INFO SIDEBAR ── */}
            <div className="kontakt-info">
              {/* Address */}
              <div className="kontakt-info-card">
                <div className="kontakt-info-card-header">
                  <div className="kontakt-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="kontakt-info-label">Adres</div>
                    <div className="kontakt-info-value">ul. Kościelna 12</div>
                  </div>
                </div>
                <div className="kontakt-info-subvalue">
                  42-230 Koniecpol, woj. śląskie
                </div>
              </div>

              {/* Phone */}
              <div className="kontakt-info-card">
                <div className="kontakt-info-card-header">
                  <div className="kontakt-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="kontakt-info-label">Telefon do serwisu</div>
                    <a href="tel:+48795347346" className="kontakt-info-value">
                      795-347-346
                    </a>
                  </div>
                </div>
                <div className="kontakt-info-card-header kontant-margin">
                  <div className="kontakt-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="kontakt-info-label">
                      Telefon właściciela:{" "}
                    </div>
                    <a href="tel:+48606995924" className="kontakt-info-value">
                      606-995-924
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="kontakt-info-card">
                <div className="kontakt-info-card-header">
                  <div className="kontakt-info-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="kontakt-info-label">Email</div>
                    <a
                      href="mailto:sklep@madcomputer.pl"
                      className="kontakt-info-value"
                    >
                      sklep@madcomputer.pl
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="kontakt-info-card">
                <div className="kontakt-info-card-header">
                  <div className="kontakt-info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="kontakt-info-label">Godziny otwarcia</div>
                  </div>
                </div>
                <table className="hours-table">
                  <tbody>
                    {HOURS.map((h) => (
                      <tr
                        key={h.day}
                        className={h.day === TODAY_INDEX ? "today" : ""}
                      >
                        <td>{h.label}</td>
                        <td className={h.closed ? "hours-closed" : ""}>
                          {h.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── FORM ── */}
            <div className="kontakt-form-wrapper">
              <h1>
                Aktualnie Jesteśmy <span>Otwarci</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="kontakt-map-section">
        <div className="container">
          <div className="kontakt-map-wrapper">
            <iframe
              title="Mapa – Mad Computer Koniecpol"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.7084140284671!2d19.680548264046998!3d50.772356575704315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717422638f1ccf3%3A0x3f5f6b12f3a5aaf5!2sP.P.H.U.%20MAD-COMPUTER!5e0!3m2!1spl!2spl!4v1776894660351!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
