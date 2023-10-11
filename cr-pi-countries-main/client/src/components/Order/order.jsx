import React from "react";
import styles from "./Order.module.css";

export default function Order({ handleOrder }) {
  return (
    <div className={styles.orderContainer}>
      {" "}
      {/* Agrega una clase de contenedor */}
      <p className={styles.orderText}>Orden:</p>{" "}
      {/* Agrega una clase para el texto */}
      <select onChange={handleOrder} className={styles.orderSelect}>
        {" "}
        {/* Agrega una clase para el select */}
        <option value="APopulation">Population (low) ↓</option>
        <option value="DPopulation">Population (high) ↑</option>
        <option value="AAlphabetic">Alphabetic (A-Z)</option>
        <option value="DAlphabetic">Alphabetic (Z-A)</option>
      </select>
    </div>
  );
}
