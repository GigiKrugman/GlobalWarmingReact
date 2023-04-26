import React from "react";
import { useState, useEffect } from "react";
import api from "../ApiRequest";
import Chart from "../ChartContainer/Chart";
import { ReactComponent as ArcticSvg } from "../../assets/Images/arctic.svg";
import textContent from "../../textContent";
import ExpandableContainer from "../ExpandableContainer/ExpandableContainer";
import Loading from "../LoadingComponent/Loading";

export default function Arctic() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await api.get("/arctic-api");
      console.log(response);
      setData(response.data.arcticData);
      setIsLoading(false);
    } catch (error) {
      console.log("Error loading data", error);
    }
  };

  return (
    <div>
      <div className="title--component--container">
        <ArcticSvg className="title-svg" />{" "}
        <h2 className="title--header">Arctic</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Chart data={data} dataKeys={["extent", "area"]} />
          <ExpandableContainer
            title={textContent.arctic.title}
            content={textContent.arctic.content}
          />
        </>
      )}
    </div>
  );
}
