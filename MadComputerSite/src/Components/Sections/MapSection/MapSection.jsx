import "./MapSection.css";

function MapSection() {
  return (
    <div className="MapWrapper">
      <iframe
        title="Lokalizacja MadComputer"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6700.7982893789895!2d19.677605644601293!3d50.77227295768166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717422638f1ccf3%3A0x3f5f6b12f3a5aaf5!2sP.P.H.U.%20MAD-COMPUTER!5e0!3m2!1spl!2spl!4v1776524182766!5m2!1spl!2spl"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapSection;
