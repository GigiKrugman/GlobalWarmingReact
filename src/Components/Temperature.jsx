import React from "react";
import { useState, useEffect } from "react";
import api from "../Components/ApiRequest";
import Chart from "../Components/Chart";
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
      <Chart
        data={data}
        dataKeys={["time", "station", "land"]}
        title="Temperature"
      />
    </div>
  );
}
