import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ handleChange, handleSubmit, searchCountry }) {
  const location = useLocation();

  return (
    <div>
      <div>
        <button>
          <Link to="/home">Home</Link>
        </button>
        {location.pathname === "/form" ? <h1>Create a New Activity!</h1> : null}
        <button>
          <Link to="/form">Create Activities</Link>
        </button>
        {location.pathname === "/home" && (
          <form>
            <input
              onChange={(event) => handleChange(event)}
              type="search"
              placeholder="Search..."
              value={searchCountry}
            />
            <button type="submit" onClick={handleSubmit}>
              Search
            </button>
          </form>
        )}
      </div>
      {location.pathname !== "/form" ? (
        <img src="ruta_de_la_imagen.jpg" alt="Welcome" />
      ) : null}
    </div>
  );
}
