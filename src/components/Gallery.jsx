import React from "react";
import HornedBeast from "./HornedBeast";

export default function ({ myData, setSelectedBeast, setIsModalShowing }) {
  return (
    <div className="Gallery">
      {myData.map((e, index) => {
        return (
          <HornedBeast
            key={e._id}
            myData={e}
            index={index}
            setSelectedBeast={setSelectedBeast}
            setIsModalShowing={setIsModalShowing}
          ></HornedBeast>
        );
      })}
    </div>
  );
}
