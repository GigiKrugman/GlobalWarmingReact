import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as MethaneSvg } from "../../assets/Images/Methane.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";

export default function Methane() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/methane-api").then((response) => {
      console.log(response);
      setData(response.data.methane);
    });
  });

  return (
    <div>
      <div className="title--component--container">
        <MethaneSvg className="title-svg" />
        <h2 className="title--header">Methane</h2>
      </div>
      <Chart data={data} dataKeys={["date", "average", "trend"]} />
      <ExpandableContainer
        title={textContent.methane.title}
        content={textContent.methane.content}
      />
    </div>
  );
}
