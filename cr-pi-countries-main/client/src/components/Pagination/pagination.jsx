import React from "react";
import styles from "./Pagination.module.css";

export function Pagination({
  countriesPerPage,
  currentPage,
  setCurrentPage,
  totalCountries,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className={styles.paginationContainer}>
      {" "}
      {/* Agrega una clase de contenedor */}
      {pageNumbers.length === 1 ? (
        setCurrentPage(1)
      ) : (
        <nav>
          {currentPage === 1 ? null : (
            <button
              className={styles.paginationButton}
              onClick={onPreviousPage}
            >
              Previous
            </button>
          )}
          <ul className={styles.paginationList}>
            {" "}
            {/* Agrega una clase para la lista */}
            {pageNumbers.map((noPage) => (
              <li key={noPage}>
                <button
                  className={`${styles.paginationButton} ${
                    currentPage === noPage ? styles.current : ""
                  }`}
                  onClick={() => onSpecificPage(noPage)}
                >
                  {noPage}
                </button>
              </li>
            ))}
          </ul>
          {currentPage === pageNumbers.length ? null : (
            <button className={styles.paginationButton} onClick={onNextPage}>
              Next
            </button>
          )}
        </nav>
      )}
    </div>
  );
}
