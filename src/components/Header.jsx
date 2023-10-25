import React from "react";

export default function Header({ currentSearch, setCurrentSearch }) {
  return (
    <div className="Header">
      <h1>Horned Beasts</h1>

      <input
        type="text"
        placeholder="Enter a keyword..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
    </div>
  );
}
