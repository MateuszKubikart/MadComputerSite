import NavBar from "./Components/NavBar/NavBar";
import MainPageInfo from "./Components/Sections/MainPageInfo/MainPageInfo";
import Fotowoltaika from "./Components/Sections/Fotowoltaika/Fotowoltaika";
import KoniecpolSerwis from "./Components/Sections/KoniecpolSerwis/KoniecpolSerwis";
import SliderMain from "./Components/Sections/SliderMain/SliderMain";
function App() {
  return (
    <>
      <NavBar />
      <SliderMain />
      <div className="SiteSections">
        <Fotowoltaika />
      </div>
      <KoniecpolSerwis />
    </>
  );
}

export default App;
