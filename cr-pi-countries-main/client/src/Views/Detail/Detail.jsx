import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/NavBar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivityById, getCountryById } from "../../redux/actions";

export default function Detail() {
  const { id } = useParams();
  const country = useSelector((state) => state.countryById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch]);

  const handleDelete = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(deleteActivityById(value, id));
  };

  return (
    <div>
      <Navbar />
      <h1>{country.name}</h1>
      <h2>Capital: {country.capital}</h2>
      <img src={country.flag} alt={country.name} />
      <h3>Continent: {country.region}</h3>
      <h3>
        Sub-Region: {country.subregion ? country.subregion : "No subregion"}
      </h3>
      <h4>Population: {country.population}</h4>
      <hr />
      <h2>Activities You Can Do</h2>
      <div>
        {country.Activities?.map((act) => {
          return (
            <div key={act.id}>
              <button value={act.id} onClick={handleDelete}>
                Delete
              </button>
              <h3>Name: {act.name}</h3>
              <p>Difficulty(1-5): {act.difficulty}</p>
              <p>Duration: {act.duration}hs.</p>
              <p>Season: {act.season}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
