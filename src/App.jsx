import Arctic from "../src/Components/Arctic";
import CarbonDioxide from "./Components/CarbonDioxide";
import "./App.css";
import "./assets/Css/Chart.css";
import NitrousOxide from "./Components/NitrousOxide";
import Temperature from "./Components/Temperature";

function App() {
  return (
    <div className="App">
      <Arctic />
      <CarbonDioxide />
      <NitrousOxide />
      <Temperature />
    </div>
  );
}

export default App;
