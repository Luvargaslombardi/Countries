import React from "react";

export default function Filters({
  handleFilter,
  handleFilterByActivity,
  activities,
}) {
  const checkActivity = {};

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
    <div>
      <p>Filter By Activity: </p>
      <select onChange={handleFilterByActivity}>
        <option value="Show All">Show All</option>
        {activitiesName.length > 0
          ? activitiesName.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))
          : null}
      </select>
      <p>Filter By Continent: </p>
      <select onChange={handleFilter}>
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
