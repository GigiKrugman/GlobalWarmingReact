import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as CoSvg } from "../../assets/Images/CO2.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";
import Loading from "../LoadingComponent/Loading";
import Error from "../ErrorComponent/Error";

export default function CarbonDioxide() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await api.get("/co2-api");
      console.log(response);
      setData(response.data.co2);
      setIsLoading(false);
    } catch (error) {
      <Error />;
    }
  };

  return (
    <div>
      <div className="title--component--container">
        <CoSvg className="title-svg" /> <h2 className="title--header">C02</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Chart data={data} dataKeys={["cycle", "trend"]} />
          <ExpandableContainer
            title={textContent.carbonDioxide.title}
            content={textContent.carbonDioxide.content}
          />
        </>
      )}
    </div>
  );
}
