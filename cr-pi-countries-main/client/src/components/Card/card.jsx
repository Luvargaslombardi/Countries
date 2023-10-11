import { Link } from "react-router-dom";
import styles from "./Card.module.css"; // Importa el archivo de estilos

export default function Card({ country }) {
  return (
    <div className={styles.cardContainer}>
      {" "}
      {/* Agrega una clase de contenedor */}
      <h1 className={styles.countryName}>{country.name}</h1>{" "}
      {/* Estilo para el nombre */}
      <Link to={`/detail/${country.id}`} className={styles.link}>
        <img src={country.flag} alt={country.name} className={styles.flag} />{" "}
        {/* Estilo para la imagen */}
      </Link>
      <h2 className={styles.region}>{country.region}</h2>{" "}
      {/* Estilo para la región */}
    </div>
  );
}
