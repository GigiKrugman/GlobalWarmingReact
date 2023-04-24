import React from "react";

import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as CoSvg } from "../../assets/Images/CO2.svg";
export default function CarbonDioxide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/co2-api").then((response) => {
      console.log(response);
      setData(response.data.co2);
    });
  });

  return (
    <div>
      <div className="title--component--container">
        <CoSvg className="title-svg" /> <h2 className="title--header">C02</h2>
      </div>
      <Chart data={data} dataKeys={["cycle", "trend"]} />
    </div>
  );
}
