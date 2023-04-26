import React, { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as MethaneSvg } from "../../assets/Images/Methane.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";
import Loading from "../LoadingComponent/Loading";

export default function Methane() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await api.get("/methane-api");
      console.log(response);
      setData(response.data.methane);
      setIsLoading(false);
    } catch (error) {
      console.log("Error loading data", error);
    }
  };

  return (
    <div>
      <div className="title--component--container">
        <MethaneSvg className="title-svg" />
        <h2 className="title--header">Methane</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Chart data={data} dataKeys={["date", "average", "trend"]} />
          <ExpandableContainer
            title={textContent.methane.title}
            content={textContent.methane.content}
          />
        </>
      )}
    </div>
  );
}
