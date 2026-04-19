import "./KoniecpolSerwis.css";
import MapSection from "../MapSection/MapSection";
function KoniecpolSerwis() {
  return (
    <section className="KoniecpolSerwisSection">
      <div className="MapDivKoniecpolSerwis">
        <div className="DivMapSerwis">
          <MapSection />
        </div>
        <div className="SerwisInfoDiv">
          <h1>Serwis w Koniecpolu </h1>
          <label>Adres: Koniecpol ul. Kościelna 12</label>
          <label>
            Zadzwoń do nas: <a href="tel:+48123456789">795-347-346</a>
          </label>
          <label>
            Email:{" "}
            <a href="mailto:sklep@madcomputer.pl">sklep@madcomputer.pl</a>
          </label>
          <label>Godziny otwarcia:</label>
          <ul>
            <li>pon-pt: 8.00-16.00</li>
            <li>sob: 8.00-16.00</li>
          </ul>
        </div>
      </div>
      <div className="SerwisButtonDiv">
        <button className="SerwisButton">Poznaj ofertę</button>
      </div>
    </section>
  );
}

export default KoniecpolSerwis;
