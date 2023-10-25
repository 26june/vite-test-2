import React, { useState } from "react";

export default function HornedBeast({
  myData,
  index,
  setSelectedBeast,
  setIsModalShowing,
}) {
  const { _id, image_url, title, description, keyword, horns } = myData;

  const [hearts, setHearts] = useState(0);

  function handleHeartClick() {
    setHearts((current) => current + 1);
  }

  function handleImageClick() {
    setSelectedBeast(index);
    setIsModalShowing(true);
  }

  return (
    <div className="HornedBeast">
      <h2>{title}</h2>
      <img src={image_url} alt={title} onClick={handleImageClick} />
      <p>{description}</p>
      <p>{`No. of Horns: ${horns}`}</p>
      <p>
        <button onClick={handleHeartClick}>❤️</button>
        {hearts}
      </p>
    </div>
  );
}
