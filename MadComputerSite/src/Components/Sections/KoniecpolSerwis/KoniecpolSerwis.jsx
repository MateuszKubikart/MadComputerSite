import "./KoniecpolSerwis.css";
import MapSection from "../MapSection/MapSection";
function KoniecpolSerwis() {
  return (
    <div className="KoniecpolSerwisSection">
      <section className="sectionSizer">
        <div className="MapDivKoniecpolSerwis">
          <div className="DivMapSerwis">
            <MapSection />
          </div>
          <div className="SerwisInfoDiv">
            <h1>Serwis w Koniecpolu </h1>
            <h3>Skontaktuj się z nami</h3>
            <label>
              Adres:{" "}
              <label className="serwisBoldText">
                Koniecpol ul. Kościelna 12
              </label>
            </label>

            <label>Godziny otwarcia serwisu:</label>
            <ul>
              <li>
                pon-pt: <label className="serwisBoldText">8.00-16.00</label>
              </li>
              <li>
                sob: <label className="serwisBoldText">8.00-13.00</label>
              </li>
            </ul>
            <label>
              Zadzwoń do nas: <a href="tel:+48123456789">795-347-346</a>
            </label>
            <label>
              Email:{" "}
              <a href="mailto:sklep@madcomputer.pl">sklep@madcomputer.pl</a>
            </label>
          </div>
        </div>
        <div className="SerwisButtonDiv">
          <button className="SerwisButton">Poznaj ofertę</button>
        </div>
      </section>
    </div>
  );
}

export default KoniecpolSerwis;
