import React from "react";
import { ReactComponent as LoadingSvg } from "../../assets/Images/Loading.svg";

export default function Loading() {
  return (
    <div className="loading--container">
      <h1 className="loading--text">Loading the charts</h1>
      <LoadingSvg className="loading--svg" />
      <div className="spinner"></div>
    </div>
  );
}
