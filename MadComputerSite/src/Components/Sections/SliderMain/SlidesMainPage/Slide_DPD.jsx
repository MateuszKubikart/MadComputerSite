import "./Slide.css";
import "./Slide_DPD.css";
function Slide_DPD() {
  return (
    <section className="slideSection" id="Slide_DPD">
      <div className="sectionSizer">
        <div className="DPDDiv">
          <h1>Punkt DPD Pickup</h1>
          <div className="DPDSizeDiv">
            <div className="DivInfoOpen">
              <h3>Punkt czynny w godzinach:</h3>
              <ul className="DPD_p">
                <li>
                  pon-pt: <label>8.00-16.00</label>
                </li>
                <li>
                  sob: <label>8.00-13.00</label>
                </li>
              </ul>
            </div>
            <div className="DivInfoOpen">
              <h3>Możesz tutaj:</h3>
              <ul className="DPD_p">
                <li>Odbiór przesyłki</li>
                <li>Nadanie opłaconej przesyłki</li>
                <li>Nadanie za gotówkę</li>
                <li>Nadanie bez etykiety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide_DPD;
