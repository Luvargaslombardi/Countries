import React from "react";

export default function Order({ handleOrder }) {
  return (
    <div>
      <p>Sort By:</p>
      <select onChange={handleOrder}>
        <option value="APopulation">Population (low) ↓</option>
        <option value="DPopulation">Population (high) ↑</option>
        <option value="AAlphabetic">Alphabetic (A-Z)</option>
        <option value="DAlphabetic">Alphabetic (Z-A)</option>
      </select>
    </div>
  );
}
