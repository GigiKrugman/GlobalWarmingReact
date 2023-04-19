import React from "react";
import { useState, useEffect } from "react";
import api from "../Components/ApiRequest";
import Chart from "../Components/Chart";
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
      <Chart
        data={data}
        dataKeys={["date", "average", "trend"]}
        title="Nitrous Oxide"
      />
    </div>
  );
}
