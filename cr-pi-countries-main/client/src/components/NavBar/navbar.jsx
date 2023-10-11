import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ handleChange, handleSubmit, searchCountry }) {
  const location = useLocation();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <button className={styles.navButton}>
          <Link to="/home" className={styles.navLink}>
            Home
          </Link>
        </button>
        {location.pathname === "/form" ? (
          <h1 className={styles.navHeader}>New Activity</h1>
        ) : null}
        <button className={styles.navButton}>
          <Link to="/form" className={styles.navLink}>
            Create Activities
          </Link>
        </button>
        {location.pathname === "/home" && (
          <form className={styles.searchForm}>
            <input
              onChange={(event) => handleChange(event)}
              type="search"
              placeholder="Search..."
              value={searchCountry}
              className={styles.searchInput}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.searchButton}
            >
              Search
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
