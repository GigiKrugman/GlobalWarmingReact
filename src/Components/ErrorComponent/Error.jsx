import React from "react";
import { ReactComponent as LoadingSvg } from "../../assets/Images/Loading.svg";

export default function Error() {
  return (
    <div className="error--container">
      <h2 className="error--text">
        Oooops...looks like there is some troubles in loading the content...
      </h2>
      <h3>Please try later or check your network...</h3>
      <LoadingSvg className="error--svg" />
    </div>
  );
}
