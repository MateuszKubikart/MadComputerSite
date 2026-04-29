import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Fotowoltaika from "./Pages/Fotowoltaika/Fotowoltaika.jsx";
import ProjektFoto1 from "./Pages/Fotowoltaika/ProjektFoto1.jsx";
import Uslugi from "./Pages/Uslugi/Uslugi.jsx";
import KasyFiskalne from "./Pages/KasyFiskalne/KasyFiskalne.jsx";
import ONas from "./Pages/ONas/ONas.jsx";
import Kontakt from "./Pages/Kontakt/Kontakt.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fotowoltaika" element={<Fotowoltaika />} />
            <Route path="/Fotowoltaika/Projekty" element={<ProjektFoto1 />} />
            <Route path="/Uslugi" element={<Uslugi />} />
            <Route path="/Kasy-fiskalne" element={<KasyFiskalne />} />
            <Route path="/O-nas" element={<ONas />} />
            <Route path="/contact" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
