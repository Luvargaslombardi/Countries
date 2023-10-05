import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  filterByActivitie,
  getActivities,
  getCountries,
  getCountriesByName,
  orderCountries,
} from "../../redux/actions";
import Cards from "../../components/Cards/cards.jsx";
import { Pagination } from "../../components/Pagination/pagination"; // Importamos Pagination como una importación con nombre
import Filters from "../../components/Filters/filters.jsx";
import Order from "../../components/Order/order.jsx";
import Navbar from "../../components/NavBar/navbar.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const allActivities = useSelector((state) => state.allActivities);

  const [searchCountry, setSearchCountry] = useState("");
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [aux, setAux] = useState(false);

  const totalCountries = allCountries.length;
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  const handleChange = (event) => {
    event.preventDefault();
    setSearchCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountriesByName(searchCountry));
    setSearchCountry("");
  };

  const handleSubmitAllCountries = (event) => {
    event.preventDefault();
    dispatch(getCountries());
  };

  const handleFilter = (event) => {
    event.preventDefault();
    dispatch(filter(event.target.value));
  };

  const handleFilterByActivity = (event) => {
    event.preventDefault();
    dispatch(filterByActivitie(event.target.value));
  };

  const handleOrder = (event) => {
    event.preventDefault();
    dispatch(orderCountries(event.target.value));
    setAux(true);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <Navbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchCountry={searchCountry}
      />
      <div>
        <button onClick={handleSubmitAllCountries}>All Countries</button>
      </div>
      <Filters
        handleFilter={handleFilter}
        handleFilterByActivity={handleFilterByActivity}
        activities={allActivities}
      />
      <Order handleOrder={handleOrder} />
      <Cards
        countries={allCountries}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
      />
      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalCountries}
      />
    </div>
  );
}
