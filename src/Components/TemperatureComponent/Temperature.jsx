import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as TemperatureSvg } from "../../assets/Images/Temperature.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";
import Loading from "../LoadingComponent/Loading";

export default function Temperature() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await api.get("/temperature-api");
      console.log(response);
      setData(response.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log("Error loading data", error);
    }
  };

  return (
    <div>
      <div className="title--component--container">
        <TemperatureSvg className="title-svg" />
        <h2 className="title--header">Temperature</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Chart data={data} dataKeys={["time", "station", "land"]} />
          <ExpandableContainer
            title={textContent.temperature.title}
            content={textContent.temperature.content}
          />
        </>
      )}
    </div>
  );
}
