import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as TemperatureSvg } from "../../assets/Images/Temperature.svg";
export default function Temperature() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/temperature-api").then((response) => {
      console.log(response);
      setData(response.data.result);
    });
  });

  return (
    <div>
      <div className="title--component--container">
        <TemperatureSvg className="title-svg" />
        <h2 className="title--header">Temperature</h2>
      </div>
      <h2>Temperature</h2>
      <Chart data={data} dataKeys={["time", "station", "land"]} />
    </div>
  );
}
