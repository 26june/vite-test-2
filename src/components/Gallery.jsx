import React from "react";
import myData from "../myData";
import HornedBeast from "./HornedBeast";

export default function () {
  return (
    <div className="Gallery">
      {myData.map((e) => {
        return <HornedBeast key={e._id} myData={e}></HornedBeast>;
      })}
    </div>
  );
}
