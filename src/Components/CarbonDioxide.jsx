import React from "react";

import { useState, useEffect } from "react";
import api from "../Components/ApiRequest";
import Chart from "../Components/Chart";
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
      <Chart data={data} dataKeys={["cycle", "trend"]} title="Co2" />
    </div>
  );
}
