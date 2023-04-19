import React from "react";
import { useState, useEffect } from "react";
import api from "../Components/ApiRequest";
import Chart from "../Components/Chart";
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
      <Chart data={data} dataKey="extent" title="Arctic" />
    </div>
  );
}
