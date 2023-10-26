import React from "react";

export default function Header({
  currentSearch,
  setCurrentSearch,
  setCurrentSelect,
}) {
  const hornNumbers = [1, 2, 3, 100];

  return (
    <div className="Header">
      <h1>Horned Beasts</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a keyword..."
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />

        <label htmlFor="hornSelect">Choose the Number of Horns: </label>
        <select
          name="hornSelect"
          id="hornSelect"
          onChange={(e) => setCurrentSelect(e.target.value)}
        >
          <option value="all">All</option>
          {hornNumbers.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
