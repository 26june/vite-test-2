import React from "react";

export default function Modal({ currentBeast, setIsModalShowing }) {
  function handleModalClick() {
    setIsModalShowing(false);
  }

  return (
    <div className="Modal" onClick={handleModalClick}>
      <div className="Modal-Content">
        <img src={currentBeast.image_url} alt={currentBeast.title} />
        <p>{currentBeast.description}</p>
      </div>
    </div>
  );
}
