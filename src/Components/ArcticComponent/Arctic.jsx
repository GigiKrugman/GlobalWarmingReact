import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as ArcticSvg } from "../../assets/Images/arctic.svg";
export default function Arctic() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/arctic-api").then((response) => {
      console.log(response);
      setData(response.data.arcticData);
    });
  });

  return (
    <div>
      <div className="title--component--container">
        <ArcticSvg className="title-svg" />{" "}
        <h2 className="title--header">Arctic</h2>
      </div>

      <Chart data={data} dataKeys={["extent", "area"]} />
    </div>
  );
}
