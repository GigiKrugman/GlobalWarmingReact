import React, { useState } from "react";
import Arctic from "./Arctic";
import CarbonDioxide from "./CarbonDioxide";
import NitrousOxide from "./NitrousOxide";
import Temperature from "./Temperature";

export default function GraphContainer() {
  const [currentComponent, setCurrentComponent] = useState("Arctic");
  const renderComponent = () => {
    switch (currentComponent) {
      case "Arctic":
        return <Arctic />;
      case "CarbonDioxide":
        return <CarbonDioxide />;
      case "NitrousOxide":
        return <NitrousOxide />;
      case "Temperature":
        return <Temperature />;
      default:
        return <Arctic />;
    }
  };
  return (
    <div className="graph--container">
      <div className="button--container">
        <button onClick={() => setCurrentComponent("Arctic")}>Arctic</button>
        <button onClick={() => setCurrentComponent("CarbonDioxide")}>
          CO2
        </button>
        <button onClick={() => setCurrentComponent("NitrousOxide")}>
          Nitrous Oxide
        </button>
        <button onClick={() => setCurrentComponent("Temperature")}>
          Temperature
        </button>
      </div>
      {renderComponent()}
    </div>
  );
}
