import React, { useState } from "react";

export default function HornedBeast(props) {
  const { _id, image_url, title, description, keyword, horns } = props.myData;

  const [hearts, setHearts] = useState(0);

  function handleImageClick() {
    setHearts((current) => current + 1);
  }

  return (
    <div className="HornedBeast">
      <h2>{title}</h2>
      <img src={image_url} alt={title} onClick={handleImageClick} />
      <p>{description}</p>
      <p>{`No. of Horns: ${horns}`}</p>
      {`❤️ ${hearts}`}
    </div>
  );
}
