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
    <div>
      {pageNumbers.length === 1 ? (
        setCurrentPage(1)
      ) : (
        <nav>
          {currentPage === 1 ? null : (
            <button onClick={onPreviousPage}>Previous</button>
          )}
          <ul>
            {pageNumbers.map((noPage) => (
              <li key={noPage}>
                <button
                  className={currentPage === noPage ? "current" : ""}
                  onClick={() => onSpecificPage(noPage)}
                >
                  {noPage}
                </button>
              </li>
            ))}
          </ul>
          {currentPage === pageNumbers.length ? null : (
            <button onClick={onNextPage}>Next</button>
          )}
        </nav>
      )}
    </div>
  );
}
