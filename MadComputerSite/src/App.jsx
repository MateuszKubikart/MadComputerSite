import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Fotowoltaika from "./Pages/Fotowoltaika/Fotowoltaika.jsx";
import Uslugi from "./Pages/Uslugi/Uslugi.jsx";
import KasyFiskalne from "./Pages/KasyFiskalne/KasyFiskalne.jsx";
import ONas from "./Pages/ONas/ONas.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fotowoltaika" element={<Fotowoltaika />} />
            <Route path="/Uslugi" element={<Uslugi />} />
            <Route path="/Kasy-fiskalne" element={<KasyFiskalne />} />
            <Route path="/O-nas" element={<ONas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
