import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as NoSvg } from "../../assets/Images/NitrousOxide.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";

export default function NitrousOxide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/nitrous-oxide-api").then((response) => {
      console.log(response);
      setData(response.data.nitrous);
    });
  });

  return (
    <div>
      <div className="title--component--container">
        <NoSvg className="title-svg" />
        <h2 className="title--header">NitrousOxide</h2>
      </div>
      <Chart data={data} dataKeys={["date", "average", "trend"]} />
      <ExpandableContainer
        title={textContent.nitrousDioxide.title}
        content={textContent.nitrousDioxide.content}
      />
    </div>
  );
}
