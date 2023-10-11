import React from "react";
import styles from "./Filters.module.css";

export default function Filters({
  handleFilter,
  handleFilterByActivity,
  activities,
}) {
  const checkActivity = {};
  //Creo objeto vacio que rastrea las actividades y evita duplicados en la lista

  const activitiesName = activities
    ?.map((activity) => {
      if (!checkActivity[activity.name]) {
        checkActivity[activity.name] = true;
        return activity.name;
      }
      return null;
    })
    .filter((name) => name !== null);

  return (
    <div className={styles.filtersContainer}>
      {" "}
      {/* Agrega una clase de contenedor */}
      <p className={styles.filterLabel}>Filter By Activity: </p>
      <select className={styles.filterSelect} onChange={handleFilterByActivity}>
        <option value="Show All">Show All</option>
        {activitiesName.length > 0
          ? activitiesName.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))
          : null}
      </select>
      <p className={styles.filterLabel}>Filter By Continent: </p>
      <select className={styles.filterSelect} onChange={handleFilter}>
        <option value="Show All">Show All</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
