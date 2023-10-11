import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/NavBar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivityById, getCountryById } from "../../redux/actions";
import styles from "./detail.module.css"; // Importamos los estilos de módulo

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
    <div className={styles.detailContainer}>
      {" "}
      {/* Aplicamos los estilos de módulo */}
      <Navbar />
      <h1 className={styles.countryName}>{country.name}</h1>
      <h2 className={styles.subtitle}>Capital: {country.capital}</h2>
      <img
        src={country.flag}
        alt={country.name}
        className={styles.countryImage}
      />
      <h3 className={styles.subtitle}>Continent: {country.region}</h3>
      <h3 className={styles.subtitle}>
        Sub-Region: {country.subregion ? country.subregion : "No subregion"}
      </h3>
      <h4 className={styles.population}>Population: {country.population}</h4>
      <hr />
      <h2 className={styles.activitiesTitle}>Activities You Can Do</h2>
      <div className={styles.activitiesContainer}>
        {country.Activities?.map((act) => {
          return (
            <div key={act.id} className={styles.activityCard}>
              <button
                value={act.id}
                onClick={handleDelete}
                className={styles.deleteButton}
              >
                Delete
              </button>
              <h3 className={styles.activityName}>Name: {act.name}</h3>
              <p className={styles.activityInfo}>
                Difficulty(1-5): {act.difficulty}
              </p>
              <p className={styles.activityInfo}>Duration: {act.duration}hs.</p>
              <p className={styles.activityInfo}>Season: {act.season}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
