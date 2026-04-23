import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Fotowoltaika from "./Pages/Fotowoltaika/Fotowoltaika.jsx";
import Uslugi from "./Pages/Uslugi/Uslugi.jsx";
import "./App.css"; // We'll keep generic app styles here or remove it if not needed

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
