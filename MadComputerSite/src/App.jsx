import NavBar from "./Components/NavBar/NavBar";
import MainPageInfo from "./Components/MainPageInfo/MainPageInfo";
import Fotowoltaika from "./Components/Sections/Fotowoltaika/Fotowoltaika";
import KoniecpolSerwis from "./Components/Sections/KoniecpolSerwis/KoniecpolSerwis";

function App() {
  return (
    <>
      <NavBar />
      <div className="SiteSections">
        <MainPageInfo />
        <Fotowoltaika />
      </div>
      <KoniecpolSerwis />
    </>
  );
}

export default App;
