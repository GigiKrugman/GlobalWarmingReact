import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as NoSvg } from "../../assets/Images/NitrousOxide.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";
import Loading from "../LoadingComponent/Loading";
import Error from "../ErrorComponent/Error";

export default function NitrousOxide() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await api.get("/nitrous-oxide-api");
      console.log(response);
      setData(response.data.nitrous);
      setIsLoading(false);
    } catch (error) {
      <Error />;
    }
  };

  return (
    <div>
      <div className="title--component--container">
        <NoSvg className="title-svg" />
        <h2 className="title--header">NitrousOxide</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Chart data={data} dataKeys={["date", "average", "trend"]} />
          <ExpandableContainer
            title={textContent.nitrousOxide.title}
            content={textContent.nitrousOxide.content}
          />
        </>
      )}
    </div>
  );
}
