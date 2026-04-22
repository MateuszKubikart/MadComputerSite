import "./Slide.css";
import "./Slide_Kasy.css";
import farexLogo from "../../../../assets/farex.png";
import posnetLogo from "../../../../assets/posnet.png";
import novitusLogo from "../../../../assets/novitus.png";

function Slide_Kasy() {
  return (
    <section className="slideSection" id="Slide_Kasy">
      <div className="sectionSizer">
        <div className="KasyDiv">
          <h1>Serwis Kas Fiskalnych</h1>
          <div className="KasyDivInfo">
            <span>
              Zapewnimy Ci usługi serwisowe na najwyższym poziomie. Świadczone
              są one przez wysokiej klasy specjalistów. Otrzymasz od nas także
              fachowe doradztwo w zakresie obowiązku fiskalizacji, zgodnie z
              obowiązującym prawem. Będziemy dla Ciebie wsparciem we wdrożeniu
              kas, drukarek i innego sprzętu czy odpowiedniego oprogramowania.
              Jeśli będzie taka potrzeba, zorganizujemy i przeprowadzimy
              szkolenia dla Twojego personelu w zakresie obsługi urządzeń
              fiskalnych.
            </span>
          </div>
          <h3>Zajmujemu się kasami firm: </h3>
          <div className="DivRowKasy">
            <div className="farexLogoContainer">
              <img src={farexLogo} alt="Farex Logo" className="kasyLogoImg" />
            </div>
            <div className="farexLogoContainer">
              <img src={posnetLogo} alt="Posnet Logo" className="kasyLogoImg" />
            </div>
            <div className="farexLogoContainer">
              <img
                src={novitusLogo}
                alt="Novitus Logo"
                className="kasyLogoImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide_Kasy;
