import React, { useState } from "react";
import Arctic from "../ArcticComponent/Arctic";
import CarbonDioxide from "../CO2/CarbonDioxide";
import NitrousOxide from "../NitrousOxideComponent/NitrousOxide";
import Temperature from "../TemperatureComponent/Temperature";
import Methane from "../MethaneComponent/Methane";

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState("Arctic");
  //const [isLoading, setIsLoading] = useState(true);

  const isActive = (component) => {
    return currentComponent === component ? "active" : "";
  };

  const handleClick = (component) => {
    //setIsLoading(true);
    setCurrentComponent(component);
  };

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
      case "Methane":
        return <Methane />;
      default:
        return <Arctic />;
    }
  };
  return (
    <div className="graph--container">
      <div className="button--container">
        <button
          className={`${isActive("Arctic")} ${
            currentComponent === "Arctic" ? "active" : "button--styled"
          }`}
          onClick={() => handleClick("Arctic")}
        >
          Arctic
        </button>
        <button
          className={`${isActive("CarbonDioxide")} ${
            currentComponent === "CarbonDioxide" ? "active" : "button--styled"
          }`}
          onClick={() => handleClick("CarbonDioxide")}
        >
          CO2
        </button>
        <button
          className={`${isActive("NitrousOxide")} ${
            currentComponent === "NitrousOxide" ? "active" : "button--styled"
          }`}
          onClick={() => handleClick("NitrousOxide")}
        >
          Nitrous Oxide
        </button>
        <button
          className={`${isActive("Temperature")} ${
            currentComponent === "Temperature" ? "active" : "button--styled"
          }`}
          onClick={() => handleClick("Temperature")}
        >
          Temperature
        </button>
        <button
          className={`${isActive("Methane")} ${
            currentComponent === "Methane" ? "active" : "button--styled"
          }`}
          onClick={() => handleClick("Methane")}
        >
          Methane
        </button>
      </div>
      {renderComponent()}
    </div>
  );
}
